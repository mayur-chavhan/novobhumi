import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { requireAuth } from '../middleware/auth.js';

const router = Router();
const prisma = new PrismaClient();

const sseClients: Response[] = [];

const broadcastConfigUpdate = (data: any) => {
  sseClients.forEach(client => {
    client.write(`data: ${JSON.stringify(data)}\n\n`);
  });
};

router.get('/stream', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  sseClients.push(res);

  req.on('close', () => {
    const index = sseClients.indexOf(res);
    if (index > -1) {
      sseClients.splice(index, 1);
    }
  });
});

router.get('/settings', async (req: Request, res: Response) => {
  try {
    let settings = await prisma.siteSettings.findUnique({
      where: { id: 1 }
    });

    if (!settings) {
      settings = await prisma.siteSettings.create({
        data: { id: 1 }
      });
    }

    const publicSettings = {
      siteName: settings.siteName,
      tagline: settings.tagline,
      phone: settings.phone,
      email: settings.email,
      location: settings.location,
      amazonUrl: settings.amazonUrl,
      shopifyUrl: settings.shopifyUrl,
      showAmazon: settings.showAmazon,
      showShopify: settings.showShopify
    };

    res.json(publicSettings);
  } catch (error) {
    console.error('Get settings error:', error);
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
});

router.get('/settings/full', requireAuth, async (req: Request, res: Response) => {
  try {
    let settings = await prisma.siteSettings.findUnique({
      where: { id: 1 }
    });

    if (!settings) {
      settings = await prisma.siteSettings.create({
        data: { id: 1 }
      });
    }

    const maskedSettings = {
      ...settings,
      smtpPassword: settings.smtpPassword ? '••••••••' : '',
      shopifyToken: settings.shopifyToken ? '••••••••' : ''
    };

    res.json(maskedSettings);
  } catch (error) {
    console.error('Get full settings error:', error);
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
});

const validateUrl = (url: string): boolean => {
  if (!url) return true;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const sanitizeString = (str: string): string => {
  if (!str) return '';
  return str.replace(/<[^>]*>/g, '').trim();
};

router.put('/settings', requireAuth, async (req: Request, res: Response) => {
  try {
    const body = req.body;

    if (body.amazonUrl && !validateUrl(body.amazonUrl)) {
      return res.status(400).json({ error: 'Invalid Amazon URL' });
    }
    if (body.shopifyUrl && !validateUrl(body.shopifyUrl)) {
      return res.status(400).json({ error: 'Invalid Shopify URL' });
    }

    const updateData: any = {};
    
    if (body.siteName !== undefined) updateData.siteName = sanitizeString(body.siteName);
    if (body.tagline !== undefined) updateData.tagline = sanitizeString(body.tagline);
    if (body.phone !== undefined) updateData.phone = sanitizeString(body.phone);
    if (body.email !== undefined) updateData.email = sanitizeString(body.email);
    if (body.location !== undefined) updateData.location = sanitizeString(body.location);
    if (body.amazonUrl !== undefined) updateData.amazonUrl = body.amazonUrl;
    if (body.shopifyUrl !== undefined) updateData.shopifyUrl = body.shopifyUrl;
    if (body.shopifyDomain !== undefined) updateData.shopifyDomain = sanitizeString(body.shopifyDomain);
    if (body.showAmazon !== undefined) updateData.showAmazon = Boolean(body.showAmazon);
    if (body.showShopify !== undefined) updateData.showShopify = Boolean(body.showShopify);
    if (body.smtpHost !== undefined) updateData.smtpHost = sanitizeString(body.smtpHost);
    if (body.smtpPort !== undefined) updateData.smtpPort = parseInt(body.smtpPort) || 587;
    if (body.smtpUser !== undefined) updateData.smtpUser = sanitizeString(body.smtpUser);
    if (body.smtpFromName !== undefined) updateData.smtpFromName = sanitizeString(body.smtpFromName);
    if (body.smtpFromEmail !== undefined) updateData.smtpFromEmail = sanitizeString(body.smtpFromEmail);
    if (body.smtpSecure !== undefined) updateData.smtpSecure = Boolean(body.smtpSecure);
    
    if (body.smtpPassword && body.smtpPassword !== '••••••••') {
      updateData.smtpPassword = body.smtpPassword;
    }
    if (body.shopifyToken && body.shopifyToken !== '••••••••') {
      updateData.shopifyToken = body.shopifyToken;
    }

    const settings = await prisma.siteSettings.upsert({
      where: { id: 1 },
      update: updateData,
      create: { id: 1, ...updateData }
    });

    const publicSettings = {
      siteName: settings.siteName,
      tagline: settings.tagline,
      phone: settings.phone,
      email: settings.email,
      location: settings.location,
      amazonUrl: settings.amazonUrl,
      shopifyUrl: settings.shopifyUrl,
      showAmazon: settings.showAmazon,
      showShopify: settings.showShopify
    };

    broadcastConfigUpdate({ type: 'settings', data: publicSettings });

    res.json(settings);
  } catch (error) {
    console.error('Update settings error:', error);
    res.status(500).json({ error: 'Failed to update settings' });
  }
});

router.get('/social-links', async (req: Request, res: Response) => {
  try {
    const links = await prisma.socialLink.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: 'asc' }
    });
    res.json(links);
  } catch (error) {
    console.error('Get social links error:', error);
    res.status(500).json({ error: 'Failed to fetch social links' });
  }
});

router.post('/social-links', requireAuth, async (req: Request, res: Response) => {
  try {
    const { platform, handle, url } = req.body;

    const link = await prisma.socialLink.create({
      data: { platform, handle, url }
    });

    broadcastConfigUpdate({ type: 'socialLinks' });

    res.json(link);
  } catch (error) {
    console.error('Create social link error:', error);
    res.status(500).json({ error: 'Failed to create social link' });
  }
});

router.put('/social-links/:id', requireAuth, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const link = await prisma.socialLink.update({
      where: { id: parseInt(id) },
      data: updateData
    });

    broadcastConfigUpdate({ type: 'socialLinks' });

    res.json(link);
  } catch (error) {
    console.error('Update social link error:', error);
    res.status(500).json({ error: 'Failed to update social link' });
  }
});

router.delete('/social-links/:id', requireAuth, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.socialLink.delete({
      where: { id: parseInt(id) }
    });

    broadcastConfigUpdate({ type: 'socialLinks' });

    res.json({ success: true });
  } catch (error) {
    console.error('Delete social link error:', error);
    res.status(500).json({ error: 'Failed to delete social link' });
  }
});

export default router;

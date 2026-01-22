# Novobhumi - API Documentation

## Base URL

- **Development**: `http://localhost:3001/api`
- **Production**: `https://yourdomain.com/api`

## Authentication

The API uses session-based authentication. Admin endpoints require an authenticated session.

### Login

```http
POST /auth/login
Content-Type: application/json

{
  "email": "admin@novobhumi.com",
  "password": "your_password"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful"
}
```

### Logout

```http
POST /auth/logout
```

**Response:**
```json
{
  "success": true,
  "message": "Logged out"
}
```

### Check Session

```http
GET /auth/session
```

**Response:**
```json
{
  "authenticated": true,
  "user": {
    "email": "admin@novobhumi.com"
  }
}
```

## Configuration Endpoints

### Get Site Configuration

```http
GET /config
```

**Response:**
```json
{
  "siteName": "Novobhumi",
  "tagline": "Grow Your Greens: Complete Soil Replacement for Your Home Gardens and Farming",
  "phone": "+91 9226202224",
  "email": "support@novobhumi.com",
  "location": "Pune, Maharashtra, India",
  "amazonUrl": "https://amzn.in/d/asVswJT",
  "shopifyEnabled": false,
  "shopifyUrl": "",
  "socialLinks": [
    {
      "platform": "instagram",
      "url": "https://instagram.com/novobhumi",
      "active": true
    }
  ]
}
```

### Update Site Configuration

**Requires Authentication**

```http
PUT /config
Content-Type: application/json

{
  "siteName": "Novobhumi",
  "phone": "+91 9226202224",
  "email": "support@novobhumi.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Configuration updated"
}
```

### Real-time Configuration Stream (SSE)

```http
GET /config/stream
```

This endpoint returns a Server-Sent Events stream. Use it to receive real-time configuration updates.

```javascript
const eventSource = new EventSource('/api/config/stream');

eventSource.onmessage = (event) => {
  const config = JSON.parse(event.data);
  console.log('Config updated:', config);
};
```

## Media Endpoints

### Upload Media

**Requires Authentication**

```http
POST /media/upload
Content-Type: multipart/form-data

file: [binary data]
type: "logo" | "product" | "hero"
```

**Response:**
```json
{
  "success": true,
  "path": "/uploads/logo_1234567890.png",
  "url": "http://localhost:3001/uploads/logo_1234567890.png"
}
```

### Get Media Assets

```http
GET /media
```

**Response:**
```json
{
  "assets": [
    {
      "id": 1,
      "type": "logo",
      "filename": "logo_1234567890.png",
      "path": "/uploads/logo_1234567890.png",
      "uploadedAt": "2025-01-21T10:30:00Z"
    }
  ]
}
```

## Health Check

### Application Health

```http
GET /health
```

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-01-21T10:30:00Z",
  "version": "1.0.0"
}
```

## Error Responses

All error responses follow this format:

```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

### Common Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `UNAUTHORIZED` | 401 | Not authenticated |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `VALIDATION_ERROR` | 400 | Invalid input data |
| `INTERNAL_ERROR` | 500 | Server error |

## Rate Limiting

- **General endpoints**: 100 requests per minute
- **Authentication endpoints**: 10 requests per minute
- **Upload endpoints**: 20 requests per minute

## CORS

The API allows requests from configured origins. In development, `http://localhost:5000` is allowed by default.

## Changelog

### v1.0.0

- Initial API release
- Configuration management endpoints
- Authentication endpoints
- Media upload endpoints
- SSE for real-time updates

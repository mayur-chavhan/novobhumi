import { useState, type ReactNode } from "react";

interface VideoLoopProps {
  /** MP4 source under /public, e.g. "/videos/expansion.mp4" */
  srcMp4: string;
  /** Optional WebM source, preferred when present */
  srcWebm?: string;
  poster?: string;
  className?: string;
  /** Rendered when the video asset is missing or fails to load */
  fallback?: ReactNode;
}

/**
 * Muted autoplaying loop for product footage. Video assets are dropped
 * into public/videos/ — until they exist, the fallback renders instead,
 * so the layout never shows a broken player.
 *
 * Note: when <source> children are used, media error events fire on the
 * LAST <source> element (not the <video>), hence onError placement.
 */
export function VideoLoop({ srcMp4, srcWebm, poster, className = "", fallback = null }: VideoLoopProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <>{fallback}</>;
  }

  return (
    <video
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      poster={poster}
    >
      {srcWebm && <source src={srcWebm} type="video/webm" />}
      <source src={srcMp4} type="video/mp4" onError={() => setFailed(true)} />
    </video>
  );
}

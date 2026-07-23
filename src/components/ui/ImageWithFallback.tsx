import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
}: ImageWithFallbackProps) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const hasError = failedSource === src;

  if (hasError) {
    return (
      <div
        className={`image-fallback ${className}`}
        role="img"
        aria-label={alt}
        style={{ aspectRatio: width / height }}
      >
        <span>مساحة الصورة</span>
        <small>ستُضاف صورة المشروع هنا</small>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
      onError={() => {
        setFailedSource(src);
      }}
    />
  );
}

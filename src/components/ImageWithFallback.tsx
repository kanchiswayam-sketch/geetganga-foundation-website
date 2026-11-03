import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackText?: string;
  fallbackSubtext?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackText = 'Image not available',
  fallbackSubtext = 'Geetganga Social Foundation Solapur',
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div
        className={`fallback-image-placeholder ${className}`}
        role="img"
        aria-label={alt || fallbackText}
      >
        <div className="fallback-inner">
          <ImageOff size={32} className="fallback-icon" />
          <span className="fallback-title">{fallbackText}</span>
          <span className="fallback-sub">{fallbackSubtext}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`image-wrapper ${isLoading ? 'is-loading' : ''}`}>
      <img
        src={src}
        alt={alt || ''}
        className={`${className} ${isLoading ? 'img-loading' : 'img-loaded'}`}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

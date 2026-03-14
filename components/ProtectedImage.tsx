import React, { useRef, useEffect } from 'react';

interface ProtectedImageProps {
  src: string;
  alt: string;
  className?: string;
  watermark?: string;
  style?: React.CSSProperties;
  onLoad?: () => void;
  onError?: () => void;
}

const ProtectedImage: React.FC<ProtectedImageProps> = ({
  src,
  alt,
  className = '',
  watermark = 'ALYUSHRA',
  style,
  onLoad,
  onError
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    
    if (!container || !image) return;

    // Add protection attributes
    image.setAttribute('draggable', 'false');
    image.setAttribute('oncontextmenu', 'return false;');
    image.setAttribute('onselectstart', 'return false;');
    image.setAttribute('ondragstart', 'return false;');

    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable drag
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable selection
    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    image.addEventListener('contextmenu', handleContextMenu);
    image.addEventListener('dragstart', handleDragStart);
    image.addEventListener('selectstart', handleSelectStart);

    return () => {
      image.removeEventListener('contextmenu', handleContextMenu);
      image.removeEventListener('dragstart', handleDragStart);
      image.removeEventListener('selectstart', handleSelectStart);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="protected-image-container relative"
      style={style}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`protected-image ${className}`}
        onLoad={onLoad}
        onError={onError}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      {watermark && (
        <div className="protected-image-watermark">
          {watermark}
        </div>
      )}
    </div>
  );
};

export default ProtectedImage;
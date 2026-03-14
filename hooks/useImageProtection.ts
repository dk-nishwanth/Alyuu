import { useEffect } from 'react';
import { initializeImageProtection, cleanupImageProtection } from '../utils/imageProtection';

// Custom hook for image protection
export const useImageProtection = () => {
  useEffect(() => {
    // Initialize protection when hook is used
    initializeImageProtection();
    
    // Cleanup on unmount
    return () => {
      cleanupImageProtection();
    };
  }, []);

  // Return helper functions for manual protection
  return {
    protectImage: (imageElement: HTMLImageElement) => {
      imageElement.classList.add('protected-image');
      imageElement.setAttribute('draggable', 'false');
      imageElement.setAttribute('oncontextmenu', 'return false;');
      imageElement.setAttribute('onselectstart', 'return false;');
      imageElement.setAttribute('ondragstart', 'return false;');
    },
    
    addWatermark: (container: HTMLElement, text: string = 'ALYUSHRA') => {
      const watermark = document.createElement('div');
      watermark.className = 'protected-image-watermark';
      watermark.textContent = text;
      container.appendChild(watermark);
    }
  };
};
// Image Protection Utilities

// Disable right-click context menu
export const disableRightClick = (e: MouseEvent) => {
  e.preventDefault();
  return false;
};

// Disable drag start
export const disableDragStart = (e: DragEvent) => {
  e.preventDefault();
  return false;
};

// Disable keyboard shortcuts for saving/copying
export const disableKeyboardShortcuts = (e: KeyboardEvent) => {
  // Disable Ctrl+S (Save), Ctrl+A (Select All), Ctrl+C (Copy), F12 (Dev Tools)
  if (
    (e.ctrlKey && (e.key === 's' || e.key === 'a' || e.key === 'c')) ||
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && e.key === 'I') || // Ctrl+Shift+I (Dev Tools)
    (e.ctrlKey && e.shiftKey && e.key === 'J') || // Ctrl+Shift+J (Console)
    (e.ctrlKey && e.key === 'u') || // Ctrl+U (View Source)
    e.key === 'PrintScreen'
  ) {
    e.preventDefault();
    return false;
  }
};

// Detect developer tools
export const detectDevTools = () => {
  const threshold = 160;
  
  const checkDevTools = () => {
    if (
      window.outerHeight - window.innerHeight > threshold ||
      window.outerWidth - window.innerWidth > threshold
    ) {
      document.body.classList.add('dev-tools-detected');
    } else {
      document.body.classList.remove('dev-tools-detected');
    }
  };

  // Check on resize
  window.addEventListener('resize', checkDevTools);
  
  // Initial check
  checkDevTools();
  
  // Periodic check
  setInterval(checkDevTools, 1000);
};

// Disable text selection
export const disableTextSelection = () => {
  document.body.style.userSelect = 'none';
  document.body.style.webkitUserSelect = 'none';
  // @ts-ignore - These properties exist but aren't in TypeScript definitions
  document.body.style.mozUserSelect = 'none';
  // @ts-ignore - These properties exist but aren't in TypeScript definitions  
  document.body.style.msUserSelect = 'none';
};

// Add watermark to images
export const addWatermark = (imageElement: HTMLImageElement, watermarkText: string = 'ALYUSHRA') => {
  const container = imageElement.parentElement;
  if (!container) return;

  const watermark = document.createElement('div');
  watermark.className = 'protected-image-watermark';
  watermark.textContent = watermarkText;
  
  container.style.position = 'relative';
  container.appendChild(watermark);
};

// Initialize all protection measures
export const initializeImageProtection = () => {
  // Add global event listeners
  document.addEventListener('contextmenu', disableRightClick);
  document.addEventListener('dragstart', disableDragStart);
  document.addEventListener('keydown', disableKeyboardShortcuts);
  
  // Detect dev tools
  detectDevTools();
  
  // Disable text selection on images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.classList.add('protected-image');
    img.setAttribute('draggable', 'false');
    img.setAttribute('oncontextmenu', 'return false;');
    img.setAttribute('onselectstart', 'return false;');
    img.setAttribute('ondragstart', 'return false;');
  });
};

// Clean up event listeners
export const cleanupImageProtection = () => {
  document.removeEventListener('contextmenu', disableRightClick);
  document.removeEventListener('dragstart', disableDragStart);
  document.removeEventListener('keydown', disableKeyboardShortcuts);
};
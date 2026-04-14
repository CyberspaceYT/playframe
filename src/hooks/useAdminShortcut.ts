import { useEffect } from 'react';

export const useAdminShortcut = (onOpen: () => void) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ALT + W to open admin editor
      if (e.altKey && (e.key === 'w' || e.key === 'W')) {
        e.preventDefault();
        onOpen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpen]);
};

import { useCallback } from 'react';
import { BackgroundService } from '../services/backgroundService';

export function useBackground() {
  const handleBackgroundChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!BackgroundService.validateImage(file)) {
      return;
    }

    BackgroundService.processAndSaveImage(file);
  }, []);

  const initBackground = useCallback(() => {
    const savedBackground = BackgroundService.getBackground();
    if (savedBackground) {
      BackgroundService.applyBackground(savedBackground);
    }
  }, []);

  const resetBackground = useCallback(() => {
    BackgroundService.removeBackground();
  }, []);

  return {
    handleBackgroundChange,
    initBackground,
    resetBackground
  };
}
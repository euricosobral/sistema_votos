import { useCallback } from 'react';
import { saveBackgroundToStorage, getBackgroundFromStorage } from '../utils/backgroundStorage';

export function useBackground() {
  const handleBackgroundChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validação de segurança
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione apenas arquivos de imagem.');
      return;
    }

    // Limite de tamanho (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('A imagem deve ter no máximo 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const background = e.target?.result as string;
      saveBackgroundToStorage(background);
      document.body.style.backgroundImage = `url(${background})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundAttachment = 'fixed';
    };
    reader.readAsDataURL(file);
  }, []);

  const initBackground = useCallback(() => {
    const savedBackground = getBackgroundFromStorage();
    if (savedBackground) {
      document.body.style.backgroundImage = `url(${savedBackground})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundAttachment = 'fixed';
    }
  }, []);

  return {
    handleBackgroundChange,
    initBackground
  };
}
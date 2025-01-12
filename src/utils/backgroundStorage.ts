const BACKGROUND_KEY = 'app_background';

export function saveBackgroundToStorage(background: string): void {
  try {
    localStorage.setItem(BACKGROUND_KEY, background);
  } catch (error) {
    console.error('Erro ao salvar plano de fundo:', error);
  }
}

export function getBackgroundFromStorage(): string | null {
  try {
    return localStorage.getItem(BACKGROUND_KEY);
  } catch (error) {
    console.error('Erro ao recuperar plano de fundo:', error);
    return null;
  }
}

export function removeBackgroundFromStorage(): void {
  try {
    localStorage.removeItem(BACKGROUND_KEY);
  } catch (error) {
    console.error('Erro ao remover plano de fundo:', error);
  }
}
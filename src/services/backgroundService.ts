export class BackgroundService {
  private static readonly BACKGROUND_KEY = 'app_background';
  private static readonly MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

  static validateImage(file: File): boolean {
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione apenas arquivos de imagem.');
      return false;
    }

    if (file.size > this.MAX_FILE_SIZE) {
      alert('A imagem deve ter no máximo 5MB.');
      return false;
    }

    return true;
  }

  static processAndSaveImage(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      const background = e.target?.result as string;
      this.saveBackground(background);
      this.applyBackground(background);
    };
    reader.readAsDataURL(file);
  }

  static applyBackground(background: string): void {
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
  }

  static saveBackground(background: string): void {
    try {
      localStorage.setItem(this.BACKGROUND_KEY, background);
    } catch (error) {
      console.error('Erro ao salvar plano de fundo:', error);
    }
  }

  static getBackground(): string | null {
    try {
      return localStorage.getItem(this.BACKGROUND_KEY);
    } catch (error) {
      console.error('Erro ao recuperar plano de fundo:', error);
      return null;
    }
  }

  static removeBackground(): void {
    try {
      localStorage.removeItem(this.BACKGROUND_KEY);
      document.body.style.backgroundImage = 'none';
    } catch (error) {
      console.error('Erro ao remover plano de fundo:', error);
    }
  }
}
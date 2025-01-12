export const ROUTES = {
  HOME: '/',
  VOTING: '/votar',
  RESULTS: '/resultados',
  SETTINGS: '/configuracoes'
} as const;

export type Route = typeof ROUTES[keyof typeof ROUTES];
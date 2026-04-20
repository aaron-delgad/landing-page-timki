import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'soporte/:app',
    renderMode: RenderMode.Prerender,
    // Agregamos 'async' aquí para que TypeScript infiera que devuelve un Promise
    getPrerenderParams: async () => {
      return [
        { app: 'cliente' },
        { app: 'negocio' },
        { app: 'repartidor' }
      ];
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

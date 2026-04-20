import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.component/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'politica-de-privacidad',
    loadComponent: () => import('./privacy-policy.component/privacy-policy.component').then(m => m.PrivacyPolicyComponent)
  },
  {
    path: 'terms-conditions',
    loadComponent: () => import('./terms.component/terms.component').then(m => m.TermsComponent)
  },
  {
    path: 'soporte/:app',
    loadComponent: () => import('./support.component/support.component').then(m => m.SupportComponent)
  },
  { path: '**', redirectTo: '' }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'greenhouse/auth', pathMatch: 'full' },
  { path: 'greenhouse/auth', loadChildren: () => import('./auth/auth.routes').then(m=>m.authRoutes) },



  { path: 'greenhouse', loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent), children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./layout/pages/home/home.component').then(m=>m.HomeComponent) }
  ] },

];
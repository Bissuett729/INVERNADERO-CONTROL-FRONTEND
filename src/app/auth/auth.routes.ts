import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  { path: '', loadComponent: () => import('./auth.page').then(m=>m.AuthPage), children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadComponent: () => import('./login/login.page').then(m=>m.LoginPage) }
  ]},
];

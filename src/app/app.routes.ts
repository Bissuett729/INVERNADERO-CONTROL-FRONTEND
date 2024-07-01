import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.routes').then(m=>m.authRoutes) }



  // { path: 'invernadero', loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent), children: [
  //   { path: '', redirectTo: 'home', pathMatch: 'full' },
  //   { path: 'home', loadComponent: () => import('./layout/pages/home/home.component').then(m=>m.HomeComponent) }
  // ] },

];
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'greenhouse/auth', pathMatch: 'full' },
  { path: 'greenhouse/auth', loadChildren: () => import('./auth/auth.routes').then(m=>m.authRoutes) },



  { path: 'greenhouse', loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent), children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { 
      path: 'home', 
      loadComponent: () => import('./layout/pages/home/home.page').then(m=>m.HomePage) },
    {
      path: 'users',
      loadComponent: () => import('./layout/pages/users/users.page').then( m => m.UsersPage)
    },
    {
      path: 'sensors',
      loadComponent: () => import('./layout/pages/sensors/sensors.page').then( m => m.SensorsPage)
    },
    {
      path: 'settings',
      loadComponent: () => import('./layout/pages/settings/settings.page').then( m => m.SettingsPage)
    },
    {
      path: 'home',
      loadComponent: () => import('./layout/pages/home/home.page').then( m => m.HomePage)
    },
  ] },
  {
    path: 'sensores-humedad',
    loadComponent: () => import('./layout/pages/home/sensores-humedad/sensores-humedad.page').then( m => m.SensoresHumedadPage)
  },
  {
    path: 'ventiladores',
    loadComponent: () => import('./layout/pages/home/ventiladores/ventiladores.page').then( m => m.VentiladoresPage)
  },
  {
    path: 'iluminacion',
    loadComponent: () => import('./layout/pages/home/iluminacion/iluminacion.page').then( m => m.IluminacionPage)
  },
  {
    path: 'sistema-riego',
    loadComponent: () => import('./layout/pages/home/sistema-riego/sistema-riego.page').then( m => m.SistemaRiegoPage)
  },
];
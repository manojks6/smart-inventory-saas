import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register.component').then(m => m.RegisterComponent)
  },
  {
    path: '',
    loadComponent: () => import('./layout/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { 
        path: 'dashboard', 
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) 
      },
      { 
        path: 'products', 
        loadComponent: () => import('./features/products/products.component').then(m => m.ProductsComponent) 
      },
      { 
        path: 'users', 
        loadComponent: () => import('./features/users/user-list.component').then(m => m.UserListComponent) 
      },
      { 
        path: 'inventory', 
        loadComponent: () => import('./features/inventory/inventory.component').then(m => m.InventoryComponent) 
      },
      { path: 'orders', loadComponent: () => import('./features/products/products.component').then(m => m.ProductsComponent) },
      { path: 'customers', loadComponent: () => import('./features/products/products.component').then(m => m.ProductsComponent) },
      { path: 'reports', loadComponent: () => import('./features/products/products.component').then(m => m.ProductsComponent) },
      { path: 'settings', loadComponent: () => import('./features/products/products.component').then(m => m.ProductsComponent) },
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

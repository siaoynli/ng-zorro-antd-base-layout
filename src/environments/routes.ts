import { Routes } from '@angular/router';
import { environment } from './environment';

// 顶级路由，指向框架页
export const mainRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../app/pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/layout/index/index.module').then((x) => x.IndexModule),
  },
  { path: '', pathMatch: 'full', redirectTo: environment.layout },
];

// 框架页中对应的路由，指向具体的页面  框架页面中的路由都会带上顶级路由 admin  如：/admin/workplace
export const layoutRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: environment.defaultPage },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../app/pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
];

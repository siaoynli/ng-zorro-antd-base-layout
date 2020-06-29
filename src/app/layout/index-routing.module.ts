import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { layoutRoutes } from '../../environments/routes';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: layoutRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRoutingModule {}

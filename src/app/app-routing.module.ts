import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { mainRoutes } from '../environments/routes';

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

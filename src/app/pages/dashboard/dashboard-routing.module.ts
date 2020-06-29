import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkspaceComponent } from './workspace/workspace.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { MonitorComponent } from './monitor/monitor.component';

const routes: Routes = [
  {
    path: 'workspace',
    component: WorkspaceComponent,
  },
  {
    path: 'analysis',
    component: AnalysisComponent,
  },
  {
    path: 'monitor',
    component: MonitorComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'workspace' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

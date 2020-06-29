import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { WorkspaceComponent } from './workspace/workspace.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { MonitorComponent } from './monitor/monitor.component';

@NgModule({
  declarations: [WorkspaceComponent, AnalysisComponent, MonitorComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}

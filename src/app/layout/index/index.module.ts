import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from './icons-provider.module';

const components = [IndexComponent];

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
  ],
  declarations: [...components],
  exports: [...components],
})
export class IndexModule {}

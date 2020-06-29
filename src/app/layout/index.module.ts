import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from './icons-provider.module';

import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { SiderComponent } from './sider/sider.component';

const components = [IndexComponent, HeaderComponent, SiderComponent];

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

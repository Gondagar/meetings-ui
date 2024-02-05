import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { MuiTabsComponent } from './mui-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [ MuiTabsComponent ],
  exports: [ MuiTabsComponent ]
})
export class MuiTabsModule { }

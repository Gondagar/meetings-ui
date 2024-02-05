import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MuiIconComponent } from './mui-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MuiIconComponent],
  exports: [MuiIconComponent]
})
export class MuiIconModule { }

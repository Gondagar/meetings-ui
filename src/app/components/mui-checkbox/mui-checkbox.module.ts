import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MuiCheckboxComponent } from './mui-checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MuiCheckboxComponent],
  exports: [MuiCheckboxComponent]
})
export class MuiCheckboxModule { }

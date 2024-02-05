import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MuiErrorMessageModule } from '../mui-error-message/mui-error-message.module';
import { MuiInputComponent } from './mui-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MuiErrorMessageModule
  ],
  declarations: [MuiInputComponent],
  exports: [MuiInputComponent]
})
export class MuiInputModule { }

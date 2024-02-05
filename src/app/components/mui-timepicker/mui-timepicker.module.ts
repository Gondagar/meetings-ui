import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap';

import { MuiTimepickerComponent } from './mui-timepicker.component';
import { MuiErrorMessageModule } from '../mui-error-message/mui-error-message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TimepickerModule.forRoot(),

    MuiErrorMessageModule
  ],
  declarations: [MuiTimepickerComponent],
  exports: [MuiTimepickerComponent]
})
export class MuiTimepickerModule { }

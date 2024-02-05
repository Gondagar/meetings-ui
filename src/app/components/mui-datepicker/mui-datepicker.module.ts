import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { MuiDatepickerComponent } from './mui-datepicker.component';
import { MuiErrorMessageModule } from '../mui-error-message/mui-error-message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DatepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),

    MuiErrorMessageModule
  ],
  declarations: [MuiDatepickerComponent],
  exports: [MuiDatepickerComponent]
})
export class MuiDatepickerModule { }

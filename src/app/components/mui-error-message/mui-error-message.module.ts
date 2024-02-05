import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { MuiErrorMessageComponent } from './mui-error-message.component';
import { MuiErrorMessageService } from './services';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [MuiErrorMessageComponent],
  exports: [MuiErrorMessageComponent],
  providers: [MuiErrorMessageService]
})
export class MuiErrorMessageModule { }

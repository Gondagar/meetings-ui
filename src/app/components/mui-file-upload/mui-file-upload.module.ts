import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { MuiFileUploadComponent } from './mui-file-upload.component';
import { MuiErrorMessageModule } from '../mui-error-message/mui-error-message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),

    MuiErrorMessageModule
  ],
  declarations: [MuiFileUploadComponent],
  exports: [MuiFileUploadComponent]
})
export class MuiFileUploadModule { }

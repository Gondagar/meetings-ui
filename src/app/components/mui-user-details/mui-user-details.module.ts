import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiUserDetailsComponent } from './mui-user-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { MuiAvatarModule } from '../mui-avatar/mui-avatar.module';
import { MuiModalModule } from '../mui-modal/mui-modal.module';
import { MuiFileUploadModule } from '../mui-file-upload/mui-file-upload.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),

    MuiAvatarModule,
    MuiFileUploadModule,
    MuiModalModule
  ],
  declarations: [MuiUserDetailsComponent],
  exports: [MuiUserDetailsComponent]
})
export class MuiUserDetailsModule { }

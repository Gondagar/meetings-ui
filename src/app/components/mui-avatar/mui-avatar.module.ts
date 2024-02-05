import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiAvatarComponent } from './mui-avatar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MuiAvatarComponent],
  exports: [MuiAvatarComponent]
})
export class MuiAvatarModule { }

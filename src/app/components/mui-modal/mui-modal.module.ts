import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiModalComponent } from './mui-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MuiModalComponent],
  exports: [MuiModalComponent]
})
export class MuiModalModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MuiIconsSpriteComponent } from './mui-icons-sprite.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MuiIconsSpriteComponent],
  exports: [MuiIconsSpriteComponent]
})
export class MuiIconsSpriteModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuiLoaderComponent } from './mui-loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MuiLoaderComponent],
  exports: [MuiLoaderComponent]
})
export class MuiLoaderModule { }

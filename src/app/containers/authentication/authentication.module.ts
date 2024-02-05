import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { MuiCheckboxModule, MuiErrorMessageModule, MuiInputModule } from '@app/components';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LoginFormComponent, RegistrationFormComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    FormsModule,

    MuiInputModule,
    MuiCheckboxModule,
    MuiErrorMessageModule,
    AuthenticationRoutingModule
  ],
  declarations: [AuthenticationComponent, RegistrationFormComponent, LoginFormComponent]
})
export class AuthenticationModule { }

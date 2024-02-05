import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTS } from '@utils/constants';
import { AuthenticationComponent } from './authentication.component';
import { LoginFormComponent, RegistrationFormComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: ROUTS.AUTHENTICATION.children.REGISTRATION.path,
        component: RegistrationFormComponent
      },
      {
        path: ROUTS.AUTHENTICATION.children.LOGIN.path,
        component: LoginFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }

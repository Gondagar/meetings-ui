import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginUserDTO } from '@utils/dto';
import { ROUTS } from '@utils/constants';
import { AuthorizationService } from '@app/services';
import { getRoutPath } from '@app/utils';

@Component({
  selector: 'mui-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
  form: FormGroup;

  constructor(private authService: AuthorizationService) {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  invalidControl(controlName: string | string[]): boolean {
    const control = this.form.get(controlName);
    return control.invalid && (control.dirty || control.touched);
  }

  handleSubmit() {
    if (!this.form.valid) {
      return;
    }

    const data = new LoginUserDTO(this.email, this.password);

    this.authService.Login(data);
  }

  get registrationFormLink() {
    return getRoutPath('AUTHENTICATION.REGISTRATION', ROUTS);
  }

  get email() {
    return this.form.get('email').value;
  }

  get password() {
    return this.form.get('password').value;
  }

  get formInvalid() {
    return !this.form.valid;
  }
}

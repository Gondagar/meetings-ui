import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RegistrationDTO } from '@utils/dto';
import { ROUTS } from '@app/utils/constants';
import { getRoutPath } from '@app/utils';
import { AuthorizationService } from '@app/services';

@Component({
  selector: 'mui-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationFormComponent {
  form: FormGroup;

  constructor(private authService: AuthorizationService) {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
      consents: new FormControl(false, Validators.required)
    });
  }

  invalidControl(controlName: string | string[]): boolean {
    const control = this.form.get(controlName);
    return control.invalid && (control.dirty || control.touched);
  }

  handleSubmit() {
    if (this.formInvalid) {
      return;
    }

    const data = new RegistrationDTO(this.email, this.password, this.firstName, this.lastName, this.confirmPassword, this.consents);

    this.authService.SignUp(data);
  }

  get loginFormLink() {
    return getRoutPath('AUTHENTICATION.LOGIN', ROUTS);
  }

  get email() {
    return this.form.get('email').value;
  }

  get firstName() {
    return this.form.get('firstName').value;
  }

  get lastName() {
    return this.form.get('lastName').value;
  }

  get password() {
    return this.form.get('password').value;
  }

  get confirmPassword() {
    return this.form.get('confirmPassword').value;
  }

  get consents() {
    return this.form.get('consents').value;
  }

  get formInvalid() {
    return !this.form.valid || !this.consents;
  }
}

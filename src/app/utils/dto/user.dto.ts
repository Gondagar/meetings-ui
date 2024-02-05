import * as jwt_decode from 'jwt-decode';

export class UserTokenDTO {
  sub: string;
  name: string;
  exp: Date;

  constructor(accessToken: string) {
    const payload = jwt_decode.decode(accessToken);
    this.sub = payload.sub;
    this.name = payload.name;
    this.exp = new Date(payload.exp);
  }
}

export class LoginUserDTO {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

export class RegistrationDTO {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  consents: boolean;

  constructor( email, password, firstName, lastName, confirmPassword, consents ) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.consents = consents;
  }
}

export class UserDetailsDTO {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
}

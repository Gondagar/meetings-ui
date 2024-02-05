
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserDetailsDTO } from '@app/utils';
import { ApiService } from './api.service';
import { ENDPOINTS } from '@app/utils/constants/endpoints.constants';

@Injectable()
export class UsersService {
  public users: Observable<UserDetailsDTO[]>;

  constructor(
    private apiService: ApiService
  ) { }

  public getUsers() {
    this.users = this.apiService.get(ENDPOINTS.USERS);
    return this.users;
  }

  public saveAvatar(avatar: File) {
    const formData: FormData = new FormData();

    formData.append('avatar', avatar);

    return this.apiService.put(ENDPOINTS.USER_AVATAR, formData);
  }
}

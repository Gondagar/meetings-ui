import { Component, ChangeDetectionStrategy, Input, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { UserDetailsDTO } from '@app/utils';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UsersService, AuthorizationService } from '@app/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mui-user-details',
  templateUrl: './mui-user-details.component.html',
  styleUrls: ['./mui-user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuiUserDetailsComponent implements OnDestroy {
  @Input() user: UserDetailsDTO;

  avatarModalVisible: boolean;
  avatarForm: FormGroup;

  private subscription: Subscription;

  constructor(private userService: UsersService, private authService: AuthorizationService, private cdRef: ChangeDetectorRef) {
    this.avatarModalVisible = false;
    this.subscription = new Subscription();
    this.avatarForm = new FormGroup({
      avatar: new FormControl(null, Validators.required)
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  invalidControl(controlName: string | string[]): boolean {
    const control = this.avatarForm.get(controlName);
    return control.invalid && (control.dirty || control.touched);
  }

  closeModal() {
    this.avatarModalVisible = false;
    this.cdRef.markForCheck();
  }

  readAvatar() {
    const reader = new FileReader();

    reader.readAsDataURL(this.avatarForm.get('avatar').value);
    reader.onload = () => {
      this.user.avatar = reader.result as string;
      this.cdRef.markForCheck();
      this.closeModal();
    };
  }

  openAvatarModal() {
    this.avatarModalVisible = true;
  }

  saveAvatar() {
    const subscription = this.userService
      .saveAvatar(this.avatarForm.get('avatar').value)
      .subscribe(() => {
        this.readAvatar();
      });

    this.subscription.add(subscription);
  }

  get isValid() {
    return this.avatarForm.valid;
  }
}

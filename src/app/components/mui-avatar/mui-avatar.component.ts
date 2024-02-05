import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'mui-avatar',
  templateUrl: './mui-avatar.component.html',
  styleUrls: ['./mui-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuiAvatarComponent {
  @Input() theme: string;
  @Input() data: string | null;

  constructor() {
    this.theme = 'light';
  }

  get avatar() {
    return this.data ? this.data : this.themeAvatar;
  }

  get themeAvatar() {
    return this.theme === 'dark' ? 'assets/images/user-dark.svg' : 'assets/images/user.svg';
  }
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IIconSetting } from '@utils/interfaces';

@Component({
  selector: 'mui-icon',
  templateUrl: './mui-icon.component.html',
  styleUrls: ['./mui-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuiIconComponent {
  @Input() icon: string;
  @Input() settings: IIconSetting;

  constructor() {
    this.settings = {
      width: '40px',
      height: '40px'
    };
  }

  get iconHref() {
    return '#' + this.icon;
  }

  get iconClass() {
    return 'mui-icon-' + this.icon;
  }
}

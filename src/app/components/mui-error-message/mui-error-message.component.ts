import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { MuiErrorMessageService } from './services';

@Component({
  selector: 'mui-error-message',
  templateUrl: './mui-error-message.component.html',
  styleUrls: ['./mui-error-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuiErrorMessageComponent {
  @Input() type: string;
  @Input() errors: ValidationErrors;
  @Input() show: boolean;

  constructor(private errorMessageService: MuiErrorMessageService) { }

  get errorMessage() {
    return this.errors ? this.errorMessageService.getErrorMessage(this.errors) : '';
  }
}

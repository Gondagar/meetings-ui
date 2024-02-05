import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'mui-input',
  templateUrl: './mui-input.component.html',
  styleUrls: ['./mui-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => MuiInputComponent)
    }
  ]
})
export class MuiInputComponent implements ControlValueAccessor {
  focus: boolean;
  dirty: boolean;
  value: string;

  @Input() placeHolder: string;
  @Input() name: string;
  @Input() id: string;
  @Input() invalid: boolean;
  @Input() disabled: boolean;
  @Input() showError: boolean;
  @Input() errorMessage: boolean;
  @Input() errors: ValidationErrors;
  @Input() label: string;
  @Input() type: 'text' | 'password';

  constructor(private cdRef: ChangeDetectorRef) {
    this.placeHolder = '';
    this.name = '';
    this.type = 'text';
   }

  onBlur() {
    this.focus = false;
    this.propagateTouched();
  }

  onInput(value) {
    this.propagateChange( value );
  }

  // ControlValueAccessor
  propagateChange = value => {};

  propagateTouched = () => {};

  writeValue(value: string): void {
    this.value = value;
    this.cdRef.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdRef.markForCheck();
  }

  markAsDirty() {
    this.dirty = true;
  }

  get shouldShowError() {
    return this.showError && this.invalid && this.dirty;
  }
}

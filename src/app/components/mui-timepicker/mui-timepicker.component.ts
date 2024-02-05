import { Component, ChangeDetectionStrategy, forwardRef, Input, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'mui-timepicker',
  templateUrl: './mui-timepicker.component.html',
  styleUrls: ['./mui-timepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => MuiTimepickerComponent)
    }
  ]
})
export class MuiTimepickerComponent implements ControlValueAccessor {
  focus: boolean;
  dirty: boolean;
  value: Date;

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
    this.value = new Date();
    this.placeHolder = '';
    this.name = '';
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

  writeValue(value: Date): void {
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

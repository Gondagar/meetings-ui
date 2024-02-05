import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, ValidationErrors, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mui-datepicker',
  templateUrl: './mui-datepicker.component.html',
  styleUrls: ['./mui-datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => MuiDatepickerComponent)
    }
  ]
})
export class MuiDatepickerComponent implements OnInit, ControlValueAccessor {
  myDateValue: Date;
  focus: boolean;
  dirty: boolean;
  value: Date;
  minDate: Date;
  maxDate: Date;

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
    this.minDate = new Date();
    this.maxDate = new Date();

    this.maxDate.setTime(this.maxDate.getTime() * 10000000000000);
  }

  ngOnInit() {
    this.myDateValue = new Date();
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

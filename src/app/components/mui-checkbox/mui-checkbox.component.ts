import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mui-checkbox',
  templateUrl: './mui-checkbox.component.html',
  styleUrls: ['./mui-checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => MuiCheckboxComponent)
    }
  ]
})
export class MuiCheckboxComponent implements ControlValueAccessor {
  static checkboxNumber = 0;

  private readonly checkboxGenericId = 'mui-checkbox-';

  focus: boolean;
  checked: boolean;

  @Input() name: string;
  @Input() label: string;
  @Input() checkboxId: string;
  @Input() invalid: boolean;
  @Input() disabled: boolean;

  constructor(private cdRef: ChangeDetectorRef) {
    this.setCheckboxId();
    this.name = '';
    this.label = '';
   }

  setCheckboxId() {
    this.checkboxId = this.checkboxGenericId + MuiCheckboxComponent.checkboxNumber;
    MuiCheckboxComponent.checkboxNumber++;
  }

  toggle() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.propagateChange(this.checked);
    }
  }

  // ControlValueAccessor
  propagateChange = value => {};

  propagateTouched = () => {};

  writeValue(value): void {
    this.checked = !!value;
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
}

import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, ValidationErrors, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mui-file-upload',
  templateUrl: './mui-file-upload.component.html',
  styleUrls: ['./mui-file-upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => MuiFileUploadComponent)
    }
  ]
})
export class MuiFileUploadComponent implements ControlValueAccessor {
  focus: boolean;
  dirty: boolean;
  value: string;
  imageSrc: string;

  @Input() placeHolder: string;
  @Input() name: string;
  @Input() id: string;
  @Input() invalid: boolean;
  @Input() disabled: boolean;
  @Input() showError: boolean;
  @Input() errorMessage: boolean;
  @Input() errors: ValidationErrors;
  @Input() label: string;
  @Input() extensions: string;

  constructor(private cdRef: ChangeDetectorRef) {
    this.placeHolder = '';
    this.name = '';
    this.extensions = 'image/png, image/jpeg';
   }

  onBlur() {
    this.focus = false;
    this.propagateTouched();
  }

  onInput(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];

      reader.readAsDataURL(file);
      reader.onload = () => {
        if (this.extensions.includes('image')) {
          this.imageSrc = reader.result as string;
          this.cdRef.markForCheck();
        }

        this.propagateChange( file );
        this.cdRef.markForCheck();
      };

      this.propagateChange( file );
      this.cdRef.markForCheck();
    }

    this.propagateChange( null );
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

import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'mui-modal',
  templateUrl: './mui-modal.component.html',
  styleUrls: ['./mui-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuiModalComponent implements OnChanges {
  @Input() isOpen: boolean;
  @Input() caption: string;

  showModal: boolean;

  constructor(private cdRef: ChangeDetectorRef) {
    this.isOpen = false;
    this.showModal = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isOpen.currentValue === false) {
      setTimeout(() => {
        this.showModal = false;
        this.cdRef.markForCheck();
      }, 2000);
    } else if (changes.isOpen.currentValue === true) {
      this.showModal = true;
      this.cdRef.markForCheck();
    }
  }
}

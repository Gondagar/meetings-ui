import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'mui-tabs',
  templateUrl: './mui-tabs.component.html',
  styleUrls: ['./mui-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuiTabsComponent {
  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;
  @Input() tabs: any;
  @Input() activeTab: number;

  constructor() {
    this.activeTab = 1;
   }

  isActive(index: number): boolean {
    return index === this.activeTab;
  }

  activateTab(index: number) {
    this.activeTab = index;
  }
}

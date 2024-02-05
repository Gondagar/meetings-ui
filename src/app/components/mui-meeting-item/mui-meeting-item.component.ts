import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'mui-meeting-item',
  templateUrl: './mui-meeting-item.component.html',
  styleUrls: ['./mui-meeting-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuiMeetingItemComponent implements OnInit {
  @Input() title: string;
  @Input() participants: MeetingParticipantDTO[];
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }
}

import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MeetingNoteDTO } from '@app/utils';

@Component({
  selector: 'mui-note',
  templateUrl: './mui-note.component.html',
  styleUrls: ['./mui-note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MuiNoteComponent implements OnInit {
  @Input() note: MeetingNoteDTO;

  constructor() { }

  ngOnInit() {
  }
}

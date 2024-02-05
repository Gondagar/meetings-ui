export class MeetingNoteDTO {
  id: string;
  content: string;
  creationDate: Date;
}

export class MeetingNoteRequestDTO {
  content: string;

  constructor(content: string) {
    this.content = content;
  }
}

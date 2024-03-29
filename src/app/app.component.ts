import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '@env/environment';

@Component({
  selector: 'mui-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Meetings';

  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang(environment.lang);
  }
}

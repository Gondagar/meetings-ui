import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModuleConfig } from '@ngx-translate/core';

import { HttpLoaderFactory } from '../factory';

/**
 * configuration for the TranslateModule
 */
export const translateConfig: TranslateModuleConfig = {
  defaultLanguage: 'en',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
  }
};

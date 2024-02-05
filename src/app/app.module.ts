import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { NotifierModule } from 'angular-notifier';

import { translateConfig } from '@utils/constants';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './utils/helpers/interceptor';
import { AuthGuard } from './guards';
import { AuthorizationService, AuthContextService, ApiService } from './services';
import { MuiLoaderModule } from './components';
import { AppHttpInterceptor } from './utils/helpers/response.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NotifierModule,
    TranslateModule.forRoot(translateConfig),

    AppRoutingModule,
    MuiLoaderModule
  ],
  providers: [
    AuthGuard,
    ApiService,
    AuthorizationService,
    AuthContextService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Observable, Subject, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';

import { environment } from '@env/environment';
import { IApiOptions } from '@app/utils';

@Injectable()
export class ApiService {
  readonly apiUrl: string;
  readonly defaultErrorMessage: string;

  public loading: Subject<boolean>;

  constructor(private http: HttpClient, private notifier: NotifierService) {
    this.loading = new Subject();
    this.apiUrl = environment.apiUrl;
    this.defaultErrorMessage = 'ERROR_MESSAGE.DEFAULT';
  }

  get(url: string, options: IApiOptions = {}) {
    const request = this.http.get<any>(this.apiUrl + url, options);

    return this.wrapRequest(request);
  }

  post(url: string, body: any = {}, options: IApiOptions = {}) {
    const request = this.http.post<any>(this.apiUrl + url, body, options);

    return this.wrapRequest(request);
  }

  put(url: string, body: any = {}, options: IApiOptions = {}) {
    const request = this.http.put<any>(this.apiUrl + url, body, options);

    return this.wrapRequest(request);
  }

  delete(url: string, body: any = {}, options = {}) {
    const request = this.http.delete<any>(this.apiUrl + url, options);

    return this.wrapRequest(request);
  }

  private wrapRequest(request: Observable<any>) {
    this.loading.next(true);

    return request.pipe(
      tap((response) => {
        this.loading.next(false);

        return response;
      }),
      catchError(response => {
        const errors = response.error;

        this.loading.next(false);

        switch (+response.status) {
          case 500: {
            this.notifier.notify('error', 'An error occurred!');
            break;
          }
          case 404: {
            this.notifier.notify('error', response.error);
            break;
          }
          case 400: {
            try {
              const keys = Object.keys(errors);

              keys.map(key => {
                this.notifier.notify('error', errors[key][0]);
              });
            } catch (e) { }
            break;
          }
        }

        return throwError(response);
      })
    );
  }
}

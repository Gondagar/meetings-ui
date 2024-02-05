import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { AuthContextService } from '@app/services';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(public authContextService: AuthContextService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(response => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.authContextService.removeToken();
        }

        return throwError(error);
      }));
  }
}

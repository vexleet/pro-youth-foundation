import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { APP_KEY, APP_SECRET } from 'src/app/kinvey.tokens';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthService,
        private toastr: ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.endsWith(`user/${APP_KEY}`) || req.url.endsWith('login')) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`,
                }
            });
        }
        else {
            const token = this.authService.token;
            req = req.clone({
                setHeaders: {
                    Authorization: `Kinvey ${token}`,
                }
            });
        }

        return next.handle(req)
            .pipe(catchError((err: HttpErrorResponse) => {
                if (err.status === 409) {
                    this.toastr.error('This username is already taken.');
                }
                if (err.status === 401 && err.url.includes('login')) {
                    this.toastr.error('Invalid username or password.');
                }

                return throwError(err);
            }));
    }
}

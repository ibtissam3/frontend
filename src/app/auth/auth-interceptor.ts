// import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { AuthService } from './auth.service';
//
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService) {}
//   /* <any> - intercept all kinds of HTTP requests*/
//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     const authToken = this.authService.getToken();
//     /**
//      * We must not edit intercepted HTTP request.
//      * Instead, we make exact copy of it, and append
//      * token (retreived from front-end) to it.
//      */
//     const authRequest = req.clone({
//       headers: req.headers.set('Authorization', 'Bearer ' + authToken)
//     });
//     return next.handle(authRequest); // pass-through changed HTTP request on its voyage to server
//   }
// }

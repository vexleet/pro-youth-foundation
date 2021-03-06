import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_KEY } from '../../kinvey.tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly BASE_URL = `https://baas.kinvey.com/user/${APP_KEY}`;

  constructor(private http: HttpClient) { }

  get token() {
    return localStorage.getItem('token');
  }

  isAdmin() {
    return localStorage.getItem('isAdmin') === 'true';
  }

  register(body: Object) {
    return this.http.post(this.BASE_URL, body);
  }

  login(body: Object) {
    return this.http.post(`${this.BASE_URL}/login`, body);
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/_logout`, {});
  }

  isAuthenticated() {
    return this.token === null;
  }

  saveUserInfo(res: Object) {
    localStorage.setItem('username', res['username']);
    localStorage.setItem('token', res['_kmd']['authtoken']);
    localStorage.setItem('isAdmin', res['isAdmin']);
  }
}

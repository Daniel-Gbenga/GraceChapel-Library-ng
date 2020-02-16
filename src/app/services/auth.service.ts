import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { AuthType, AuthDTO } from '@app/models/auth';
import { User } from '@app/models/user';

import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api: string = environment.api_server + '/api/Auth';

  constructor(private http: HttpClient) { }

  private auth(authType: AuthType, data: AuthDTO) {
    return this.http.post(`${this.api}/${authType}`, data).pipe(
      // mergeMap((user: User) => {
      //   this.token = 
      // })
    )
  }

  login(data: AuthDTO) {
    return this.auth('login', data);
  }

  register(data: AuthDTO) {
    return this.auth('register', data);
  }

  get token() {
    return localStorage.getItem('user_token');
  }

  set token(val: string) {
    if (val) {
      localStorage.setItem('user_token', val);
    } else {
      localStorage.clear();
    }
  }

  deleteToken() {
    localStorage.clear();
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login, response } from '../components/login/login.component';

const SERVER = 'https://reqres.in/';
const USER_PATH = SERVER + 'api/users?page=2';
const REGS_PATH = SERVER + 'api/register';
const LOGS_PATH = SERVER + 'api/login';

@Injectable({
  providedIn: 'root',
})
export class UsersService  {
  user_path_json = './assets/data/users/users.json';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.append('Content-type', 'applications/json');
  }

  getUsers() {
    return this.http.get(USER_PATH);
  }

  register(body: login) {
    return this.http.post(REGS_PATH, body, {
      headers: this.headers,
    });
  }

  login(body: login) {
    return this.http.post<response>(LOGS_PATH, body);
  }

}

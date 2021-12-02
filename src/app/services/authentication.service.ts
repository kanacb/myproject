import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authState = new BehaviorSubject(false);
  constructor() { }

  get IsAuthenticated(){
    return this.authState.value;
  }
}

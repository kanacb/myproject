import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private loginSrv: AuthenticationService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.loginSrv.IsAuthenticated;
  }
}

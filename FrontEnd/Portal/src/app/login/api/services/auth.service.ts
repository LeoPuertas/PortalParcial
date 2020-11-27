import { LoginModule } from './../../login.module';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: LoginModule
})
export class AuthService implements CanActivate {

  constructor(private _route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    var token = localStorage.getItem('token');
    if (token)
    {
      return true;
    }
    else {
      this._route.navigate(['/login']);
      return false;
    }
  }
}


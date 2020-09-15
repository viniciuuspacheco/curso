import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate() {
    if (sessionStorage.getItem('token')) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}

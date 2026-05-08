import { Injectable } from '@angular/core';
import {
  Router,
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
class AuthGuardService {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): boolean {
    const authState = this.authService.isAuthenticated();
    if (authState) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = new AuthService();
  const router = new Router(null as any, null as any);
  const guard = new AuthGuardService(authService, router);
  return guard.canActivate(route, state);
};

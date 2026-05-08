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
class AdminGuardService {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): boolean {
    const authState = this.authService.isAuthenticated();
    const user = this.authService.getCurrentUser();
    if (authState && user?.type === 'admin') {
      return true;
    }
    this.router.navigate(['/admin/login']);
    return false;
  }
}

export const adminGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = new AuthService();
  const router = new Router(null as any, null as any);
  const guard = new AdminGuardService(authService, router);
  return guard.canActivate(route, state);
};

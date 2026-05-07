import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AuthState, User } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authState$ = new BehaviorSubject<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  constructor() {
    this.initializeAuth();
  }

  getAuthState(): Observable<AuthState> {
    return this.authState$.asObservable();
  }

  isAuthenticated(): boolean {
    return this.authState$.value.isAuthenticated;
  }

  getCurrentUser(): User | null {
    return this.authState$.value.user;
  }

  patientLogin(phone: string, otp: string): Observable<AuthState> {
    const user: User = {
      id: 'patient-' + Date.now(),
      phone,
      type: 'patient',
      name: 'Patient User',
    };
    const newState: AuthState = {
      isAuthenticated: true,
      user,
      token: 'patient-token-' + Date.now(),
    };
    this.authState$.next(newState);
    localStorage.setItem('authState', JSON.stringify(newState));
    return of(newState);
  }

  adminLogin(email: string, password: string): Observable<AuthState> {
    const user: User = {
      id: 'admin-' + Date.now(),
      email,
      type: 'admin',
      name: 'Admin User',
    };
    const newState: AuthState = {
      isAuthenticated: true,
      user,
      token: 'admin-token-' + Date.now(),
    };
    this.authState$.next(newState);
    localStorage.setItem('authState', JSON.stringify(newState));
    return of(newState);
  }

  logout(): Observable<void> {
    this.authState$.next({
      isAuthenticated: false,
      user: null,
    });
    localStorage.removeItem('authState');
    return of(void 0);
  }

  private initializeAuth(): void {
    const stored = localStorage.getItem('authState');
    if (stored) {
      try {
        const state = JSON.parse(stored) as AuthState;
        this.authState$.next(state);
      } catch {
        console.error('Failed to restore auth state');
      }
    }
  }
}

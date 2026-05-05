import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { TokenService } from './token.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  
  // Using Signals for state management
  currentUser = signal<any>(null);
  isAuthenticated = signal<boolean>(false);

  constructor(private http: HttpClient, private tokenService: TokenService) {
    const user = this.tokenService.getUser();
    if (user && Object.keys(user).length > 0) {
      this.currentUser.set(user);
      this.isAuthenticated.set(true);
    }
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((res: any) => {
        this.saveSession(res);
      })
    );
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user).pipe(
      tap((res: any) => {
        if (res.access_token) {
          this.saveSession(res);
        }
      })
    );
  }

  private saveSession(res: any): void {
    this.tokenService.saveToken(res.access_token);
    this.tokenService.saveUser(res.user);
    this.currentUser.set(res.user);
    this.isAuthenticated.set(true);
  }

  logout(): void {
    this.tokenService.signOut();
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
  }
}

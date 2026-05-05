import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Assuming your currentUser object has a 'role' property
  const user = authService.currentUser();
  
  if (user && user.role === 'ADMIN') {
    return true;
  }

  // Redirect to dashboard or unathorized page if not ADMIN
  router.navigate(['/dashboard']);
  return false;
};

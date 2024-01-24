import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { of, switchMap, take } from 'rxjs';
import { AuthenticationManager } from './authentication-manager';

export const authenticationGuard: CanActivateFn = () => {
  const authenticationManager = inject(AuthenticationManager);
  const router = inject(Router);
  return authenticationManager.tryLogIn().pipe(take(1), switchMap((profile) => profile ? of(true) : router.navigate(['/login'])));
};
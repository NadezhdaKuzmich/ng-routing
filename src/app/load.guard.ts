import { inject } from '@angular/core';
import { CanMatchFn, Route, UrlSegment } from '@angular/router';
import { AuthService } from './auth.service';

// CanLoad - DEPRECATED. Use Route.canMatch and CanMatchFn instead
export const loadGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const authService = inject(AuthService);
  return authService.isLoggedIn();
};

import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Observable, from, map, of, switchMap, take } from 'rxjs';
import { UserProfile } from '../models/UserProfile';
import { AuthenticationService } from './authentication.service';

const authConfig: AuthConfig = {
  issuer: "https://accounts.google.com",
  strictDiscoveryDocumentValidation: false,
  redirectUri: 'http://localhost:4200',
  clientId: '479603210590-tg2941ec6ivracsia1sv2bf93di5b3rp.apps.googleusercontent.com',
  scope: 'openid profile email',
  logoutUrl: 'https://www.google.com/accounts/logout'
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService implements AuthenticationService {

  constructor(private readonly oAuthService: OAuthService) {
    this.oAuthService.configure(authConfig);
  }

  logIn(): Observable<UserProfile | undefined> {
    return from(this.oAuthService.loadDiscoveryDocument()).pipe(
      take(1),
      switchMap(() => from(this.oAuthService.tryLoginImplicitFlow())),
      switchMap(() => {
        if (!this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initLoginFlow();
          return of(null);
        }
        return from(this.oAuthService.loadUserProfile());
      }),
      map((result) => result as UserProfile));
  }

  logOut() {
    this.oAuthService.logOut();
  }

}

import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';
import { UserProfile } from '../models/UserProfile';
import { AuthenticationService } from './authentication.service';

const authConfig: AuthConfig = {
  issuer: "https://accounts.google.com",
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '479603210590-tg2941ec6ivracsia1sv2bf93di5b3rp.apps.googleusercontent.com',
  scope: 'openid profile email',
  logoutUrl: 'https://www.google.com/accounts/logout'
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService implements AuthenticationService {
  private readonly userProfileSubject = new Subject<UserProfile>();

  readonly userProfile$ = this.userProfileSubject.asObservable();

  constructor(private readonly oAuthService: OAuthService) { }

  logIn(): void {
    this.oAuthService.configure(authConfig);
    this.oAuthService.loadDiscoveryDocument().then(() => {
      this.oAuthService.tryLoginImplicitFlow().then(() => {
        if (!this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.initLoginFlow();
        } else {
          this.oAuthService.loadUserProfile().then((userProfile) => this.userProfileSubject.next(userProfile as UserProfile));
        }
      });
    });
  }

  logOut() {
    this.oAuthService.logOut();
  }

}

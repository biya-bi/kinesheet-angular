import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';
import { UserProfile } from '../models/UserProfile';

const authConfig: AuthConfig = {
  issuer: "https://accounts.google.com",
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '479603210590-tg2941ec6ivracsia1sv2bf93di5b3rp.apps.googleusercontent.com',
  scope: 'openid profile email'
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  private readonly userProfileSubject = new Subject<UserProfile>();

  readonly userProfile$ = this.userProfileSubject.asObservable();

  constructor(private readonly oAuthService: OAuthService) {
    this.configure(oAuthService);
  }

  private configure(oAuthService: OAuthService) {
    oAuthService.configure(authConfig);
    oAuthService.loadDiscoveryDocument().then(() => {
      oAuthService.tryLoginImplicitFlow().then(() => {
        if (!oAuthService.hasValidAccessToken()) {
          oAuthService.initLoginFlow();
        } else {
          oAuthService.loadUserProfile().then((userProfile) => this.userProfileSubject.next(userProfile as UserProfile));
        }
      });
    });
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  logOut() {
    this.oAuthService.logOut();
  }

}

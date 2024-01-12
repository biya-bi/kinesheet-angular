import { Injectable, Injector } from "@angular/core";
import { OauthProvider } from "./models/OauthProvider";
import { GithubApiService } from "./services/github-api.service";
import { GoogleApiService } from "./services/google-api.service";
import { UserProfile } from "./models/UserProfile";
import { Subject, take, tap } from "rxjs";

const OAUTH_PROVIDER_KEY = 'oAuthProvider';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationManager {
    private readonly userProfileSubject = new Subject<UserProfile>();

    readonly userProfile$ = this.userProfileSubject.asObservable();

    constructor(private readonly injector: Injector) {
        this.autoLogin();
    }

    logIn(provider: OauthProvider) {
        this.getAuthenticationService(provider).logIn().pipe(
            take(1),
            tap(userProfile => {
                if (userProfile) {
                    this.setProvider(provider);
                    this.userProfileSubject.next(userProfile);
                }
            })).subscribe();
    }

    logOut() {
        const provider = this.getProvider();
        if (provider) {
            localStorage.removeItem(OAUTH_PROVIDER_KEY);
            this.getAuthenticationService(provider).logOut();
        }
    }

    private getAuthenticationService(provider: OauthProvider) {
        if (provider === OauthProvider.google) {
            return this.injector.get(GoogleApiService);
        }
        return this.injector.get(GithubApiService);
    }

    private autoLogin() {
        const provider = this.getProvider();
        if (provider) {
            this.logIn(provider);
        }
    }

    private setProvider(provider: OauthProvider) {
        if (provider) {
            localStorage.setItem(OAUTH_PROVIDER_KEY, OauthProvider[provider]);
        } else {
            localStorage.removeItem(OAUTH_PROVIDER_KEY);
        }
    }

    private getProvider(): OauthProvider | undefined {
        const item = localStorage.getItem(OAUTH_PROVIDER_KEY);
        return item ? OauthProvider[item.toLowerCase() as keyof typeof OauthProvider] : undefined;
    }

}
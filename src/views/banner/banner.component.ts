import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AuthenticationManager } from '../../managers/authentication.manager';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  
  private readonly url$ = this.router.events.pipe(filter(e => e instanceof NavigationEnd), map(e => (e as NavigationEnd).url));

  readonly userProfile$ = this.authenticationManager.userProfile$;
  readonly isHomePage$ = this.url$.pipe(map(url => url === '/' || url === '/home'));
  readonly isLoginPage$ = this.url$.pipe(map(url => url === '/login'));
  readonly isLogoutPage$ = this.url$.pipe(map(url => url === '/logout'));

  constructor(
    private readonly authenticationManager: AuthenticationManager,
    private readonly router: Router) {
  }

}

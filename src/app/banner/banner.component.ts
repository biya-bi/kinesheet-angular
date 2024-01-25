import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map } from 'rxjs';
import { AuthenticationManager } from '../authentication-manager';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  readonly userProfile$ = this.authenticationManager.userProfile$;
  
  url$: Observable<string>;

  constructor(
    private readonly authenticationManager: AuthenticationManager,
    private readonly router: Router) {
    this.url$ = this.router.events.pipe(filter(e => e instanceof NavigationEnd), map(e => (e as NavigationEnd).url));
  }

}

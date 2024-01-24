import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthenticationManager } from '../authentication-manager';
import { UserService } from '../services/user.service';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  readonly user$ = this.userService.user$;
  readonly userProfile$ = this.authenticationManager.userProfile$;
  
  url$: Observable<string>;

  constructor(
    private readonly userService: UserService,
    private readonly authenticationManager: AuthenticationManager,
    private readonly router: Router) {
    this.url$ = this.router.events.pipe(filter(e => e instanceof NavigationEnd), map(e => (e as NavigationEnd).url));
  }

}

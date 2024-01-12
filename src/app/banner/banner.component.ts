import { Component } from '@angular/core';
import { AuthenticationManager } from '../AuthenticationManager';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  readonly user$ = this.userService.user$;
  readonly userProfile$ = this.authenticationManager.userProfile$;

  constructor(private readonly userService: UserService, private readonly authenticationManager: AuthenticationManager) { }

  logout() {
    this.authenticationManager.logOut();
  }

}

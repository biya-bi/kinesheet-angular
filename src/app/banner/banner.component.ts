import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { GoogleApiService } from '../services/google-api.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  readonly user$ = this.userService.user$;
  readonly userProfile$ = this.googleApiService.userProfile$;

  constructor(private readonly userService: UserService, private readonly googleApiService: GoogleApiService) { }

}

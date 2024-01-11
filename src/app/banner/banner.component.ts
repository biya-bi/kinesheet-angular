import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  readonly user$ = this.userService.user$;

  constructor(private readonly userService: UserService) { }

}

import { Component } from '@angular/core';
import { AuthenticationManager } from '../../managers/authentication.manager';

@Component({
  selector: 'app-logged-out',
  templateUrl: './logged-out.component.html',
  styleUrl: './logged-out.component.css'
})
export class LoggedOutComponent {

  constructor(
    private readonly authenticationManager: AuthenticationManager) {
  }

  ngOnInit() {
    this.authenticationManager.logOut();
  }

}

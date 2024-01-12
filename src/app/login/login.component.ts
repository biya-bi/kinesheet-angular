import { Component } from '@angular/core';
import { AuthenticationManager } from '../AuthenticationManager';
import { OauthProvider } from '../models/OauthProvider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  OauthProvider = OauthProvider;

  constructor(private readonly authenticationManager: AuthenticationManager) { }

  login(provider: OauthProvider) {
    this.authenticationManager.logIn(provider);
  }

}

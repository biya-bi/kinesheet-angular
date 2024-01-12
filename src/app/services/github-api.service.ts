import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService implements AuthenticationService {

  constructor() { }

  logIn(): void {
    throw new Error('Method not implemented.');
  }
  
  logOut(): void {
    throw new Error('Method not implemented.');
  }
}

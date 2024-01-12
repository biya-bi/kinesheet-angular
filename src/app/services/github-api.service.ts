import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/UserProfile';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService implements AuthenticationService {

  constructor() { }

  logIn(): Observable<UserProfile> {
    throw new Error('Method not implemented.');
  }

  logOut(): void {
    throw new Error('Method not implemented.');
  }
}

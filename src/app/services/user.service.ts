import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly userSubject = new BehaviorSubject<User | undefined>(undefined);

  readonly user$ = this.userSubject.asObservable();

}

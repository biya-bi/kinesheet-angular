import { Observable } from "rxjs";
import { UserProfile } from "../models/UserProfile";

export interface AuthenticationService {
    logIn(): Observable<UserProfile | undefined>;
    logOut(): void;
}
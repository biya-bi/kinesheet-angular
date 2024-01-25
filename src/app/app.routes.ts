import { Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { authenticationGuard } from '../guards/authentication.guard';
import { LoginComponent } from '../views/login/login.component';
import { PageNotFoundComponent } from '../views/page-not-found/page-not-found.component';
import { ObjectiveListComponent } from '../views/objective-list/objective-list.component';
import { LogOutComponent } from '../views/logout/logout.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogOutComponent },
    { path: 'objectives', component: ObjectiveListComponent, canActivate: [authenticationGuard] },
    { path: '**', component: PageNotFoundComponent }
];

import { Routes } from '@angular/router';
import { authenticationGuard } from '../guards/authentication.guard';
import { HomeComponent } from '../views/home/home.component';
import { LoginComponent } from '../views/login/login.component';
import { LogOutComponent } from '../views/logout/logout.component';
import { ObjectiveContainer } from '../views/objectives/objective-container/objective.container';
import { PageNotFoundComponent } from '../views/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogOutComponent },
    { path: 'objectives', component: ObjectiveContainer, canActivate: [authenticationGuard] },
    { path: '**', component: PageNotFoundComponent }
];

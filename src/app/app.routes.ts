import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authenticationGuard } from './authentication.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [authenticationGuard] },
    { path: 'home', component: HomeComponent, canActivate: [authenticationGuard] },
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
];

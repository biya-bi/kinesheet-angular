import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authenticationGuard } from './authentication.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ObjectiveListComponent } from './objective-list/objective-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'objectives', component: ObjectiveListComponent, canActivate: [authenticationGuard] },
    { path: '**', component: PageNotFoundComponent }
];

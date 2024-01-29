import { Routes } from '@angular/router';
import { authenticationGuard } from '../guards/authentication.guard';
import { HomeComponent } from '../views/home/home.component';
import { LoginComponent } from '../views/login/login.component';
import { LogOutComponent } from '../views/logout/logout.component';
import { ObjectiveContainer } from '../views/objectives/objective-container/objective.container';
import { PageNotFoundComponent } from '../views/page-not-found/page-not-found.component';
import { ObjectiveAddComponent } from '../views/objectives/objective-write/objective-add.component';
import { ObjectiveDetailsComponent } from '../views/objectives/objective-details/objective-details.component';
import { ObjectiveEditComponent } from '../views/objectives/objective-write/objective-edit.component';
import { ObjectiveListComponent } from '../views/objectives/objective-list/objective-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogOutComponent },
    {
        path: 'objectives',
        component: ObjectiveContainer,
        canActivate: [authenticationGuard],
        children: [
            {
                path: '',
                component: ObjectiveListComponent
            },
            {
                path: 'add',
                component: ObjectiveAddComponent
            },
            {
                path: 'details/:id',
                component: ObjectiveDetailsComponent
            },
            {
                path: 'edit/:id',
                component: ObjectiveEditComponent
            },
        ]
    },
    { path: '**', component: PageNotFoundComponent }
];

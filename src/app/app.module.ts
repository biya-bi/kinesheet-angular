import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, RouterOutlet } from "@angular/router";
import { OAuthModule } from "angular-oauth2-oidc";
import { AuthenticationComponent } from "../views/authentication/authentication.component";
import { BannerComponent } from "../views/banner/banner.component";
import { HomeComponent } from "../views/home/home.component";
import { LoginComponent } from "../views/login/login.component";
import { ObjectiveContainer } from "../views/objectives/objective-container/objective.container";
import { ObjectiveDetailsComponent } from "../views/objectives/objective-details/objective-details.component";
import { ObjectiveListComponent } from "../views/objectives/objective-list/objective-list.component";
import { ObjectiveAddComponent } from "../views/objectives/objective-write/objective-add.component";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        OAuthModule.forRoot(),
        ReactiveFormsModule,
        RouterOutlet,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        AuthenticationComponent,
        BannerComponent,
        HomeComponent,
        LoginComponent,
        ObjectiveContainer,
        ObjectiveAddComponent,
        ObjectiveDetailsComponent,
        ObjectiveListComponent,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
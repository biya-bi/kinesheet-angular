import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, RouterOutlet } from "@angular/router";
import { OAuthModule } from "angular-oauth2-oidc";
import { AppComponent } from "./app.component";
import { BannerComponent } from "./banner/banner.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { authenticationGuard } from "./authentication.guard";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        OAuthModule.forRoot(),
        ReactiveFormsModule,
        RouterOutlet,
        RouterModule.forRoot([
            { path: '', component: HomeComponent, canActivate: [authenticationGuard] },
            { path: 'home', component: HomeComponent, canActivate: [authenticationGuard] },
            { path: 'login', component: LoginComponent },
        ])
    ],
    declarations: [
        AppComponent,
        BannerComponent,
        HomeComponent,
        LoginComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
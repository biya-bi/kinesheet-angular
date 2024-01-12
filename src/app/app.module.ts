import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, RouterOutlet } from "@angular/router";
import { AppComponent } from "./app.component";
import { BannerComponent } from "./banner/banner.component";
import { OAuthModule } from "angular-oauth2-oidc";
import { LoginComponent } from "./login/login.component";
import { GoogleApiService } from "./services/google-api.service";
import { AuthenticationManager } from "./AuthenticationManager";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        OAuthModule.forRoot(),
        ReactiveFormsModule,
        RouterOutlet,
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent }
        ])
    ],
    declarations: [
        AppComponent,
        BannerComponent,
        LoginComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
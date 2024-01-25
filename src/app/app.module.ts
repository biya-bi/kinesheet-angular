import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, RouterOutlet } from "@angular/router";
import { OAuthModule } from "angular-oauth2-oidc";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { BannerComponent } from "../views/banner/banner.component";
import { HomeComponent } from "../views/home/home.component";
import { LoginComponent } from "../views/login/login.component";
import { ObjectiveListComponent } from "../views/objective-list/objective-list.component";

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
        BannerComponent,
        HomeComponent,
        LoginComponent,
        ObjectiveListComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
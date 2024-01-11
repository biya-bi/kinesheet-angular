import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { AppComponent } from "./app.component";
import { BannerComponent } from "./banner/banner.component";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterOutlet,
    ],
    declarations:[
        AppComponent,
        BannerComponent
    ],
    bootstrap:[
        AppComponent
    ]
})
export class AppModule {

}
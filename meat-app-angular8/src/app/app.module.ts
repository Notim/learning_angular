import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {MasterpageComponent} from './masterpage/masterpage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './abbout/abbout.component';
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app-routes";
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantResumeComponent } from './restaurants/restaurant-resume/restaurant-resume.component';

@NgModule({
    declarations: [
        MasterpageComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        AboutComponent,
        RestaurantsComponent,
        RestaurantResumeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [],
    bootstrap: [MasterpageComponent]
})
export class AppModule { }

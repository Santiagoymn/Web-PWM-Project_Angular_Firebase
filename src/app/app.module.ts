import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatCarouselModule } from '@ngmodule/material-carousel';
//import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomePageCategoriesComponent } from './home-page-categories/home-page-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageAboutUsComponent } from './home-page-about-us/home-page-about-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsPageInformationComponent } from './about-us-page-information/about-us-page-information.component';
import { AboutUsPageQuienesSomosComponent } from './about-us-page-quienes-somos/about-us-page-quienes-somos.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    HomePageCategoriesComponent,
    HomePageAboutUsComponent,
    AboutUsPageInformationComponent,
    AboutUsPageQuienesSomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    //FormsModule,
    //ReactiveFormsModule,
    //MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




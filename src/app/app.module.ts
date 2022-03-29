import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatCarouselModule } from '@ngmodule/material-carousel';
//import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomePageCategoriesComponent } from './home-page-categories/home-page-categories.component';


@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    HomePageCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //FormsModule,
    //ReactiveFormsModule,
    //MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

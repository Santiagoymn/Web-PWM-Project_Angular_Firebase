import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { DiscoverGCComponent } from './discover-gc/discover-gc.component';
import {CategoryPageActividadesComponent} from "./category-page-actividades/category-page-actividades.component";
import {HomePageComponent} from "./home-page/home-page.component";
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AgendaComponent } from './agenda/agenda.component';
import {ActivityPageInformationComponent} from "./activity-page-information/activity-page-information.component";
import { ActivityPageEmpresasComponent } from './activity-page-empresas/activity-page-empresas.component';
import { AgendaMessageComponent } from './agenda-message/agenda-message.component';
import {HeaderComponent} from "./header/header.component";
// import { CategoryPageActividadesComponent } from './category-page-actividades/category-page-actividades.component';


@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    HomePageCategoriesComponent,
    HomePageAboutUsComponent,
    AboutUsPageInformationComponent,
    AboutUsPageQuienesSomosComponent,
    GalleryComponent,
    FooterComponent,
    DiscoverGCComponent,
    CategoryPageActividadesComponent,
    HomePageComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    ActivityPageInformationComponent,
    AgendaComponent,
    ActivityPageEmpresasComponent,
    AgendaMessageComponent,
    HeaderComponent
    // CategoryPageActividadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule
    //FormsModule,
    //ReactiveFormsModule,
    //MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }




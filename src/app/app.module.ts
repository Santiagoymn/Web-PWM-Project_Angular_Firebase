import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageCategoriesComponent } from './home-page-categories/home-page-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageAboutUsComponent } from './home-page-about-us/home-page-about-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsPageInformationComponent } from './about-us/about-us-page-information/about-us-page-information.component';
import { AboutUsPageQuienesSomosComponent } from './about-us/about-us-page-quienes-somos/about-us-page-quienes-somos.component';
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
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HeaderComponent} from "./header/header.component";
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterMessageComponent } from './register-message/register-message.component';
import { CookieService } from 'ngx-cookie-service';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { UploadListComponent } from './components/upload-list/upload-list.component';
import { UploadDetailsComponent } from './components/upload-details/upload-details.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFireAnalyticsModule} from "@angular/fire/compat/analytics";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AlertModule} from "ngx-bootstrap/alert";

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
    LoginComponent,
    HeaderComponent,
    RegisterFormComponent,
    RegisterMessageComponent,
    UploadFormComponent,
    UploadListComponent,
    UploadDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AlertModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }




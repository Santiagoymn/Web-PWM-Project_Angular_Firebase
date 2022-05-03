import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GalleryComponent} from "./gallery/gallery.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AgendaMessageComponent} from "./agenda/agenda-message/agenda-message.component";
import {AgendaComponent} from "./agenda/agenda.component";
import {DiscoverGCComponent} from "./discover-gc/discover-gc.component";
import {CategoryPageActividadesComponent} from "./category-page-actividades/category-page-actividades.component";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {LoginComponent} from "./login/login.component";
import {RegisterMessageComponent} from "./register-form/register-message/register-message.component";
import {ActivityPageInformationComponent} from "./activity-page/activity-page-information/activity-page-information.component";

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'agenda', component: AgendaComponent},
  { path: 'galeria', component: GalleryComponent},
  { path: 'conoceGC', component: DiscoverGCComponent},
  { path: 'aboutUs', component: AboutUsComponent},
  { path: 'agendaMessage', component: AgendaMessageComponent},
  { path: 'register', component: RegisterFormComponent},
  { path: 'categoria', component: CategoryPageActividadesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registeredSuccesful', component: RegisterMessageComponent},
  { path: 'actividad', component: ActivityPageInformationComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GalleryComponent} from "./gallery/gallery.component";
import {CarruselComponent} from "./carrusel/carrusel.component";
import {HomePageAboutUsComponent} from "./home-page-about-us/home-page-about-us.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AgendaMessageComponent} from "./agenda-message/agenda-message.component";
import {AgendaComponent} from "./agenda/agenda.component";
import {DiscoverGCComponent} from "./discover-gc/discover-gc.component";
import {CategoryPageActividadesComponent} from "./category-page-actividades/category-page-actividades.component";

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'agenda', component: AgendaComponent},
  { path: 'galeria', component: GalleryComponent},
  { path: 'conoceGC', component: DiscoverGCComponent},
  { path: 'aboutUs', component: AboutUsComponent},
  { path: 'agendaMessage', component: AgendaMessageComponent},
  //{ path: 'register', component: RegisterComponent},
  { path: 'categoria', component: CategoryPageActividadesComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

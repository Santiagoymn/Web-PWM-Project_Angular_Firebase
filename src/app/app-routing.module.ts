import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GalleryComponent} from "./gallery/gallery.component";
import {CarruselComponent} from "./carrusel/carrusel.component";
import {HomePageAboutUsComponent} from "./home-page-about-us/home-page-about-us.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'galeria', component: GalleryComponent},
  { path: 'aboutUs', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

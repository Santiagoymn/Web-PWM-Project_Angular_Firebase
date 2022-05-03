import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { Galeria } from "../objetos";
import {tap} from "rxjs";
import { GalleryImagesService} from "../serviceImagesGallery/gallery-images.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css', '../app.component.css']
})
export class GalleryComponent implements OnInit {

  data: any;
  imagenes!: Galeria[];
  @Input() galeria!: Galeria;

  constructor(config: NgbCarouselConfig, private galleryImagesService: GalleryImagesService) {
  }

  ngOnInit(): void {
    this.galleryImagesService.getImagesGaleria()
      .pipe(
        tap((image: Galeria[]) => this.imagenes = image)
      )
      .subscribe();
  }

  getLogged(){
    if (sessionStorage.getItem("logged") == null){
      return false;
    }
    if (sessionStorage.getItem("logged") === "false"){
      return false;
    }
    if (sessionStorage.getItem("logged") === "true"){
      return true;
    }
    return true;
  }
}

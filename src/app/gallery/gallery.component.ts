import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { Galeria } from "../objetos";
import {tap} from "rxjs";
import {GetterJsonService} from "../getter-json.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css', '../app.component.css']
})
export class GalleryComponent implements OnInit {

  data: any;
  imagenes!: Galeria[];
  @Input() galeria!: Galeria;

  constructor(config: NgbCarouselConfig, private getterJsonService: GetterJsonService) {
  }

  ngOnInit(): void {
    this.getterJsonService.getImagesGaleria()
      .pipe(
        tap((image: Galeria[]) => this.imagenes = image)
      )
      .subscribe();
  }
}

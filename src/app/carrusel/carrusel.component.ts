import { Component, OnInit, Input } from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import { Carrusel } from '../objetos';
import { CarruselService } from '../carrusel.service';
import {tap} from "rxjs";


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})


export class CarruselComponent implements OnInit {

  data : any;
  imagenes!: Carrusel[];
  @Input() carrusel!: Carrusel;

  constructor(config: NgbCarouselConfig, private carruselService: CarruselService) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.carruselService.getImagesCarrusel()
      .pipe(
        tap((image: Carrusel[]) => this.imagenes = image)
      )
      .subscribe();
  }
}

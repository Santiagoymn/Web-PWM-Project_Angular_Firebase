import { Component, OnInit, Input } from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import { Carrusel } from '../objetos';
import {tap} from "rxjs";
import {GetterJsonService} from "../getter-json.service";


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})


export class CarruselComponent implements OnInit {

  data : any;
  imagenes!: Carrusel[];
  @Input() carrusel!: Carrusel;

  constructor(config: NgbCarouselConfig, private getterJsonService: GetterJsonService) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.getterJsonService.getImagesCarrusel()
      .pipe(
        tap((image: Carrusel[]) => this.imagenes = image)
      )
      .subscribe();
  }
}

import { Injectable, Input } from '@angular/core';
import { Carrusel } from "./objetos";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CarruselService {

  @Input() carrusel!: Carrusel;
  constructor(private http: HttpClient) {
  }

  getImagesCarrusel() {
    return this.http.get<Carrusel[]>('/assets/carrusel.json');
  }
}

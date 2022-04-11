import {Injectable, Input} from '@angular/core';
import {Galeria} from "./objetos";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  @Input() galeria!: Galeria;
  constructor(private http: HttpClient) {
  }

  getImagesGaleria() {
    return this.http.get<Galeria[]>('/assets/galeria.json');
  }
}

import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from './objetos';

@Injectable({
  providedIn: 'root'
})
export class QuienesSomosService {

  @Input() quienesSomos!: Persona;
  constructor(private http: HttpClient) {
  }

  getQuienesSomos() {
    return this.http.get<Persona[]>('/assets/quienesSomos.json');
  }
}

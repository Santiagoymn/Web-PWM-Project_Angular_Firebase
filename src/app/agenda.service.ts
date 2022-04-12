import {Injectable, Input} from '@angular/core';
import {Evento} from "./objetos";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  @Input() evento!: Evento;
  constructor(private http: HttpClient) {
  }

  getEventos() {
    return this.http.get<Evento[]>('/assets/eventos.json');
  }
}

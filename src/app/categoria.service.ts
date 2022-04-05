import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './objetos';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  @Input() categoria!: Categoria;
  constructor(private http: HttpClient) {
  }

  getCategorias() {
    return this.http.get<Categoria[]>('/assets/categorias.json');
  }
}

import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './objetos';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  @Input() categoria!: Categoria;
  private apiURL = "http://localhost:3000/categorias";

  constructor(private http: HttpClient) {
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiURL);
  }
}

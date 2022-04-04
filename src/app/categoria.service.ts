import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  constructor(private http: HttpClient) {
  }

  getCategorias() {
    return this.http.get<{titulo: string, descripcion: string, url: string, alt: string }[]>('/assets/categorias.json');
  }
}

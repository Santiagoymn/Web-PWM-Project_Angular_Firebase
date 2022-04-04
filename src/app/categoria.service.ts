import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  constructor(private http: HttpClient) {
    window.alert("aa");
  }

  getCategorias() {
    window.alert("hola");
    return this.http.get<{titulo: string, descripcion: string, url: string, alt: string }[]>('/assets/categorias.json');
  }
}

import {Injectable, Input} from '@angular/core';
import {Carrusel, Categoria, DiscoverGC, Galeria, Persona, SobreNosotrosGeneral} from "./objetos";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetterJsonService {
  @Input() categoria!: Categoria;
  @Input() quienesSomos!: Persona;
  @Input() galeria!: Galeria;
  @Input() discoverGC!: DiscoverGC;
  @Input() sobreNosotros!: SobreNosotrosGeneral;
  @Input() carrusel!: Carrusel;
  private apiURL = "http://localhost:3000/categorias";

  constructor(private http: HttpClient) {
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiURL);
  }

  getQuienesSomos() {
    return this.http.get<Persona[]>(this.apiURL);
  }

  getImagesGaleria() {
    return this.http.get<Galeria[]>(this.apiURL);
  }

  getMunicipios() {
    return this.http.get<DiscoverGC[]>(this.apiURL);
  }

  getImagesCarrusel() {
    return this.http.get<Carrusel[]>(this.apiURL);
  }

  getAboutUs() {
    return this.http.get<SobreNosotrosGeneral[]>(this.apiURL);
  }
}

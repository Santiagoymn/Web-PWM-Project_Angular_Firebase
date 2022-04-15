import {Injectable, Input} from '@angular/core';
import {Carrusel, Categoria, DiscoverGC, Galeria, Persona, SobreNosotrosGeneral, Usuario} from "./objetos";
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
  @Input() usuario!: Usuario;
  private apiURLCategorias = "http://localhost:3000/categorias";
  private apiURLSobreNosotros = "http://localhost:3000/sobreNosotros";
  private apiURLQuienesSomos = "http://localhost:3000/sobreNosotrosPersonas";
  private apiURLGaleria = "http://localhost:3000/imagenesGaleria";
  private apiURLMunicipios = "http://localhost:3000/municipios";
  private apiURLCarrusel = "http://localhost:3000/sobreimagenesCarrusel";
  private apiURLUsuarios = "http://localhost:3000/usuarios";


  constructor(private http: HttpClient) {
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiURLCategorias);
  }

  getQuienesSomos() {
    return this.http.get<Persona[]>(this.apiURLQuienesSomos);
  }

  getImagesGaleria() {
    return this.http.get<Galeria[]>(this.apiURLGaleria);
  }

  getMunicipios() {
    return this.http.get<DiscoverGC[]>(this.apiURLMunicipios);
  }

  getImagesCarrusel() {
    return this.http.get<Carrusel[]>(this.apiURLCarrusel);
  }

  getAboutUs() {
    return this.http.get<SobreNosotrosGeneral[]>(this.apiURLSobreNosotros);
  }
}

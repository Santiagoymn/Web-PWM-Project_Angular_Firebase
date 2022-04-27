import {Injectable, Input} from '@angular/core';
import {Carrusel, Categoria, DiscoverGC, Evento, Galeria, Persona, SobreNosotrosGeneral, Usuario} from "./objetos";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";



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


  constructor(private firestore: AngularFirestore) {
  }

  getCategorias(): Observable<Categoria[]> {
    return this.firestore.collection<Categoria>('categorias').valueChanges();
  }

  getEventos(){
    return this.firestore.collection<Evento>('eventos').valueChanges();
  }

  getQuienesSomos() {
    return this.firestore.collection<Persona>('sobreNosotrosPersonas').valueChanges();
  }

  getImagesGaleria() {
    return this.firestore.collection<Galeria>('imagenesGaleria').valueChanges();
  }

  getMunicipios() {
    return this.firestore.collection<DiscoverGC>('municipios').valueChanges();
  }

  getImagesCarrusel() {
    return this.firestore.collection<Carrusel>('imagenesCarrusel').valueChanges();
  }

  getAboutUs() {
    return this.firestore.collection<SobreNosotrosGeneral>('sobreNosotros').valueChanges();
  }
}

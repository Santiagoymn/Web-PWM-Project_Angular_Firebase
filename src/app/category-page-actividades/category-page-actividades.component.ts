import {Component, Input, OnInit} from '@angular/core';
import {Actividad, Categoria} from "../objetos";
import {tap} from "rxjs";
import {GetterJsonService} from "../getter-json.service";


@Component({
  selector: 'app-category-page-actividades',
  templateUrl: './category-page-actividades.component.html',
  styleUrls: ['./category-page-actividades.component.css', '../app.component.css']
})
export class CategoryPageActividadesComponent implements OnInit {

  categorias!: Categoria[];
  actividades!: Actividad[]
  @Input() categoria!: Categoria;
  @Input() actividad!: Actividad;
  constructor(private getterJsonService: GetterJsonService) {
  }


  async ngOnInit() {
    // @ts-ignore
    this.actividades = await this.getterJsonService.getCategoriaActividades(localStorage.getItem("category"));

    this.getterJsonService.getCategorias()
      .pipe(
        tap((categories: Categoria[]) => this.categorias = categories)
      )
      .subscribe();
  }

  categoriaClicada(){
    return localStorage.getItem("category");
  }

  puestaVariableActivity(identificador:any){
    localStorage.setItem('activity', identificador);
  }
}

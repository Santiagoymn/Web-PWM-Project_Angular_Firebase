import {Component, Input, OnInit} from '@angular/core';
import {Categoria} from "../objetos";
import {tap} from "rxjs";
import {GetterJsonService} from "../getter-json.service";

@Component({
  selector: 'app-category-page-actividades',
  templateUrl: './category-page-actividades.component.html',
  styleUrls: ['./category-page-actividades.component.css', '../app.component.css']
})
export class CategoryPageActividadesComponent implements OnInit {

  categorias!: Categoria[];
  @Input() categoria!: Categoria;
  constructor(private getterJsonService: GetterJsonService) {
  }

  ngOnInit(): void {
    this.getterJsonService.getCategorias()
      .pipe(
        tap((categories: Categoria[]) => this.categorias = categories)
      )
      .subscribe();
  }

  categoriaClicada(){
    return localStorage.getItem("category");
  }

  quitarEspacios(nombre: any){
    return nombre.replaceAll(" ", "")
  }

  puestaVariableActivity(identificador:any){
    var id = $(this).children("div").attr("id");
    localStorage.setItem('activityName', identificador);
  }
}

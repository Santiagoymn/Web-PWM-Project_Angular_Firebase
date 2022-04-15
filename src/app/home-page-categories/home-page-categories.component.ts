import { Component, OnInit, Input } from '@angular/core'; //Habría que añadir Input
import { Categoria } from '../objetos';
import {tap} from "rxjs";
import {GetterJsonService} from "../getter-json.service";

@Component({
  selector: 'app-home-page-categories',
  templateUrl: './home-page-categories.component.html',
  styleUrls: ['./home-page-categories.component.css', '../../styles.css']
})
export class HomePageCategoriesComponent implements OnInit {

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

  puestaVariableLocal(identificador:any){
    localStorage.setItem("category", identificador.replace(' ', ''));
  }
}

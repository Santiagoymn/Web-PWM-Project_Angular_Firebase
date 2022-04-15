import { Component, OnInit, Input } from '@angular/core'; //Habría que añadir Input
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../objetos';
import { Actividad } from "../objetos";
import { Empresa} from "../objetos";
import {tap} from "rxjs";

@Component({
  selector: 'app-home-page-categories',
  templateUrl: './home-page-categories.component.html',
  styleUrls: ['./home-page-categories.component.css', '../../styles.css']
})
export class HomePageCategoriesComponent implements OnInit {

  categorias!: Categoria[];
  @Input() categoria!: Categoria;
  constructor(private categoriaService: CategoriaService) {
  }

  ngOnInit(): void {
    this.categoriaService.getCategorias()
      .pipe(
        tap((categories: Categoria[]) => this.categorias = categories)
      )
      .subscribe();
  }

  puestaVariableLocal(identificador:any){
    localStorage.setItem("category", identificador.replace(' ', ''));
  }
}

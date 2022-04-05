import { Component, OnInit } from '@angular/core'; //Habría que añadir Input
import { CategoriaService } from '../categoria.service';
//import { Categoria } from '../objetos';

@Component({
  selector: 'app-home-page-categories',
  templateUrl: './home-page-categories.component.html',
  styleUrls: ['./home-page-categories.component.css', '../../styles.css']
})
export class HomePageCategoriesComponent implements OnInit {

  categorias = this.categoriaService.getCategorias();
  //@Input() categoria!: Categoria;
  constructor(private categoriaService: CategoriaService) {
  }

  ngOnInit(): void {
  }

}

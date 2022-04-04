import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-home-page-categories',
  templateUrl: './home-page-categories.component.html',
  styleUrls: ['./home-page-categories.component.css', '../../styles.css']
})
export class HomePageCategoriesComponent implements OnInit {

  categorias = this.categoriaService.getCategorias();

  constructor(private categoriaService: CategoriaService) {
  }

  ngOnInit(): void {
  }

}

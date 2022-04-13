import {Component, Input, OnInit} from '@angular/core';
import {Categoria} from "../objetos";
import {GetterJsonService} from "../getter-json.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-activity-page-empresas',
  templateUrl: './activity-page-empresas.component.html',
  styleUrls: ['./activity-page-empresas.component.css']
})
export class ActivityPageEmpresasComponent implements OnInit {

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

}

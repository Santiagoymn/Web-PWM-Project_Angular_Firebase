import {Component, Input, OnInit} from '@angular/core';
import {Categoria} from "../objetos";
import {GetterJsonService} from "../getter-json.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-activity-page-information',
  templateUrl: './activity-page-information.component.html',
  styleUrls: ['./activity-page-information.component.css']
})
export class ActivityPageInformationComponent implements OnInit {

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

  quitarEspacios(nombre: any){
    return nombre.replaceAll(" ", "");
  }

  actividadClicada(){
    // @ts-ignore
    var s = localStorage.getItem("activityName").replace(" ", "");
    return s;
  }

  // product: Product | undefined;
  //
  // data : any;
  // categorias!: Categoria[];
  // @Input() categoria!: Categoria;
  //
  // constructor(private route: ActivatedRoute, private categoriaService: CategoriaService) {
  //
  // }
  //
  // ngOnInit(): void {
  //   const routeParams = this.route.snapshot.paramMap;
  //   const activityIdFromRoute = Number(routeParams.get('activityId'));
  //   this.product = this.categoriaService.getListCategorias().find(product => product.id === activityIdFromRoute) ;
  // }

}

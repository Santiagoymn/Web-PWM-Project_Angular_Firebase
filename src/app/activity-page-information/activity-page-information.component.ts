// import {Component, Input, OnInit} from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import {Categoria, Actividad, Empresa, DiscoverGC} from "../objetos";
// import { CategoriaService } from '../categoria.service';
//
// @Component({
//   selector: 'app-activity-page-information',
//   templateUrl: './activity-page-information.component.html',
//   styleUrls: ['./activity-page-information.component.css']
// })
// export class ActivityPageInformationComponent implements OnInit {
//
//   product: Product | undefined;
//
//   data : any;
//   categorias!: Categoria[];
//   @Input() categoria!: Categoria;
//
//   constructor(private route: ActivatedRoute, private categoriaService: CategoriaService) {
//
//   }
//
//   ngOnInit(): void {
//     const routeParams = this.route.snapshot.paramMap;
//     const activityIdFromRoute = Number(routeParams.get('activityId'));
//     this.product = this.categoriaService.getListCategorias().find(product => product.id === activityIdFromRoute) ;
//   }
//
// }

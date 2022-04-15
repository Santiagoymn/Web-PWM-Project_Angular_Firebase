import { Component, OnInit } from '@angular/core';
import {Categoria} from "../objetos";
import {tap} from "rxjs";
import {GetterJsonService} from "../getter-json.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categorias!: Categoria[];

  subMenu: boolean = false;

  mas: boolean = true;
  menos: boolean = false;
  constructor(private getterJsonService: GetterJsonService) { }

  ngOnInit(): void {
    this.getterJsonService.getCategorias()
      .pipe(
        tap((categories: Categoria[]) => this.categorias = categories)
      )
      .subscribe();
  }

  toggleLineHeaderOculto(): void{
    $("#lineHeader").toggle()
  }

  showSubMenu(): void{
    this.subMenu = true;
    this.mas = !this.mas;
    this.menos = !this.menos;
  }

  hideSubMenu(): void{
    this.subMenu = false;
    this.mas = !this.mas;
    this.menos = !this.menos;
  }

  setCategory(id: string): void{
    localStorage.setItem("category", id);
  }

  puestaVariableLocal(identificador: any){
    // var id = $(this).attr("id");
    localStorage.setItem("category", identificador);
  }
}

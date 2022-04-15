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
    $("#subMenu").show();
    this.toggleMasMenos();
  }

  hideSubMenu(): void{
    $("#subMenu").hide();
    this.toggleMasMenos();
  }

  toggleMasMenos(): void{
    $("#mas").toggle();
    $("#menos").toggle();
  }

  setCategory(id: string): void{
    localStorage.setItem("category", id);
  }

  puestaVariableLocal(identificador: any){
    // var id = $(this).attr("id");
    localStorage.setItem("category", identificador);
  }
}

import { Component, OnInit } from '@angular/core';
import {Categoria} from "../objetos";
import {tap} from "rxjs";
import {GetterJsonService} from "../getter-json.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../app.component.css']
})
export class HeaderComponent implements OnInit {

  categorias!: Categoria[];

  width!: number;
  subMenu: boolean = false;
  constructor(private getterJsonService: GetterJsonService) { }

  ngAfterViewInit() { //Recién en este punto tendrás acceso al valor
    this.width = (document.documentElement.scrollWidth);
  }

  ngOnInit(): void {
    this.getterJsonService.getCategorias()
      .pipe(
        tap((categories: Categoria[]) => this.categorias = categories)
      )
      .subscribe();
  }

  toggleLineHeaderOculto(): void{
    $("#lineHeader").toggle();
  }

  closeTresRayas(): void{
    $("#lineHeader").hide();
    $("#subMenu").hide();
    this.toggleMasMenos();
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

  getLogged(): boolean{
    if (sessionStorage.getItem('logged') === 'true')
      return true;
    else
      return false;
  }
}

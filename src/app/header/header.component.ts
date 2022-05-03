import { Component, OnInit } from '@angular/core';
import {Categoria} from "../objetos";
import {tap} from "rxjs";
import {GetterFirebaseService} from "../serviceGeneral/getter-firebase.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../app.component.css']
})
export class HeaderComponent implements OnInit {

  categorias!: Categoria[];

  width!: number;
  subMenu: boolean = false;
  constructor(private getterJsonService: GetterFirebaseService) { }

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
    $("#menos").hide();
    $("#mas").show();
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

  puestaVariableLocal(identificador: any){
    localStorage.setItem("category", identificador);
    window.location.reload();

  }

  getLogged(): boolean{
    if (sessionStorage.getItem('logged') === 'true')
      return true;
    else
      return false;
  }
}

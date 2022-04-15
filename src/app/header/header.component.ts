import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {Categoria} from "../objetos";
import {CategoriaService} from "../categoria.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categorias!: Categoria[];

  showLineHeaderOculto: boolean = true;
  subMenu: boolean = false;

  mas: boolean = true;
  menos: boolean = false;
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias()
      .pipe(
        tap((categories: Categoria[]) => this.categorias = categories)
      )
      .subscribe();
  }

  toggleLineHeaderOculto(): void{
    this.showLineHeaderOculto = !this.showLineHeaderOculto;
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

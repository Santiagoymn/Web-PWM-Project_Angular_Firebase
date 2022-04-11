import { Component, OnInit } from '@angular/core';
import {QuienesSomosService} from "../quienes-somos.service";

@Component({
  selector: 'app-about-us-page-quienes-somos',
  templateUrl: './about-us-page-quienes-somos.component.html',
  styleUrls: ['./about-us-page-quienes-somos.component.css']
})
export class AboutUsPageQuienesSomosComponent implements OnInit {

  quienesSomos = this.quienesSomosService.getQuienesSomos();
  constructor( private quienesSomosService: QuienesSomosService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {GetterJsonService} from "../../getter-json.service";

@Component({
  selector: 'app-about-us-page-quienes-somos',
  templateUrl: './about-us-page-quienes-somos.component.html',
  styleUrls: ['./about-us-page-quienes-somos.component.css']
})
export class AboutUsPageQuienesSomosComponent implements OnInit {

  quienesSomos = this.getterJsonService.getQuienesSomos();
  constructor( private getterJsonService: GetterJsonService) { }

  ngOnInit(): void {
  }

}

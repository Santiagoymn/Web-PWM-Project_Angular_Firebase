import {Component, Input, OnInit} from '@angular/core';
import {Empresa} from "../../objetos";
import {GetterFirebaseService} from "../../serviceGeneral/getter-firebase.service";

@Component({
  selector: 'app-activity-page-empresas',
  templateUrl: './activity-page-empresas.component.html',
  styleUrls: ['./activity-page-empresas.component.css', '../../app.component.css']
})
export class ActivityPageEmpresasComponent implements OnInit {

  empresas!: Empresa[];
  @Input() empresa!: Empresa;
  constructor(private getterJsonService: GetterFirebaseService) {
  }

  async ngOnInit(){
    // @ts-ignore
    this.empresas = await this.getterJsonService.getActividadesEmpresas(localStorage.getItem("activity"));
  }
}

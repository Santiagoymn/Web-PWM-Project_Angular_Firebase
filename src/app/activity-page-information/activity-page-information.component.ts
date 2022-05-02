import {Component, Input, OnInit} from '@angular/core';
import {Actividad, Empresa} from "../objetos";
import {GetterJsonService} from "../getter-json.service";

@Component({
  selector: 'app-activity-page-information',
  templateUrl: './activity-page-information.component.html',
  styleUrls: ['./activity-page-information.component.css', '../app.component.css']
})
export class ActivityPageInformationComponent implements OnInit {

  empresas!: Empresa[];
  actividades!: Actividad[];
  @Input() actividad!: Actividad;
  @Input() empresa!: Empresa;
  constructor(private getterJsonService: GetterJsonService) {
  }

  async ngOnInit() {
    // @ts-ignore
    this.actividades = await this.getterJsonService.getCategoriaActividades(localStorage.getItem("category"))
  }

  actividadClicada(){
    return  localStorage.getItem("activity");
  }
}

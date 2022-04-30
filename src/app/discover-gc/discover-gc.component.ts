import {Component, Input, OnInit} from '@angular/core';
import {DiscoverGC} from "../objetos";
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {tap} from "rxjs";
import {GetterJsonService} from "../getter-json.service";

@Component({
  selector: 'app-discover-gc',
  templateUrl: './discover-gc.component.html',
  styleUrls: ['./discover-gc.component.css', '../app.component.css']
})
export class DiscoverGCComponent implements OnInit {

  data : any;
  municipios!: DiscoverGC[];
  @Input() discoverGC!: DiscoverGC;

  constructor(config: NgbCarouselConfig, private getterJsonService: GetterJsonService) {
  }

  async ngOnInit() {
    await this.getterJsonService.getMunicipios()
      .pipe(
        tap((municipio: DiscoverGC[]) => this.municipios = municipio)
      )
      .subscribe();
  }

  cambiarEstadoDropDown(index:any){
    const finalId = "#municipioem" + index;
    $(finalId).toggle();
  }
}

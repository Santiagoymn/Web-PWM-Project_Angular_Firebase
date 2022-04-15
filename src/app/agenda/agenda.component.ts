import {Component, Input, OnInit} from '@angular/core';
import {Evento} from "../objetos";
import {tap} from "rxjs";
import {GetterJsonService} from "../getter-json.service";

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  data : any;
  eventos!: Evento[];
  @Input() evento!: Evento;

  constructor(private getterJsonService: GetterJsonService) {
  }

  ngOnInit(): void {
    this.getterJsonService.getEventos()
      .pipe(
        tap((evento: Evento[]) => this.eventos = evento)
      )
      .subscribe();
  }

  cambiarEstadoDropDown(index:any){
    var finalId = "#apartadoevento" + index;
    $(finalId).toggle();
  }
}

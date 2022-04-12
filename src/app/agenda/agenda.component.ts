import {Component, Input, OnInit} from '@angular/core';
import {Evento} from "../objetos";
import {AgendaService} from "../agenda.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  data : any;
  eventos!: Evento[];
  @Input() evento!: Evento;

  constructor(private agendaService: AgendaService) {
  }

  ngOnInit(): void {
    this.agendaService.getEventos()
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

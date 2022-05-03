import {Component, Input, OnInit} from '@angular/core';
import {Evento} from "../objetos";
import {tap} from "rxjs";
import {GetterFirebaseService} from "../serviceGeneral/getter-firebase.service";

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css', '../app.component.css']
})
export class AgendaComponent implements OnInit {

  data : any;
  eventos!: Evento[];
  @Input() evento!: Evento;

  constructor(private getterJsonService: GetterFirebaseService) {
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

  getLogged(){
    if (sessionStorage.getItem("logged") == null){
      return false;
    }
    if (sessionStorage.getItem("logged") === "false"){
      return false;
    }
    if (sessionStorage.getItem("logged") === "true"){
      return true;
    }
    return true;
  }
}

import {Injectable, Input} from '@angular/core';
import {Usuario} from "../objetos";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  @Input() usuario!: Usuario;
  private apiURLUsuarios = "http://localhost:3000/usuarios";

  constructor(private http: HttpClient) { }

  setUsuario(user: Usuario): Observable<any> {
    return this.http.post(this.apiURLUsuarios, user);
  }

  login(user: any): Observable<any> {
    return this.http.post("http://localhost:3000/login", user);
  }
  getUsuarios() {
    return this.http.get<Usuario[]>(this.apiURLUsuarios);
  }

}

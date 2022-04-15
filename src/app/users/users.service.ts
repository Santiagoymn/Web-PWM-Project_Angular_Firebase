import {Injectable, Input} from '@angular/core';
import {Usuario} from "../objetos";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  @Input() usuario!: Usuario;
  private apiURLUsuarios = "http://localhost:3000/usuarios";

  constructor(private http: HttpClient, private cookies: CookieService) { }

  setUsuario(user: Usuario): Observable<any> {
    return this.http.post(this.apiURLUsuarios, user);
  }

  login(user: any): Observable<any> {
    return this.http.post("http://localhost:3000/login", user);
  }
  getUsuarios() {
    return this.http.get<Usuario[]>(this.apiURLUsuarios);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  getUser() {
    return this.http.get("http://localhost:3000/login");
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }

}

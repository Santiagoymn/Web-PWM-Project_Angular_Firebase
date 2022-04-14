import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuario} from "../objetos";
import {GetterJsonService} from "../getter-json.service";
import {tap} from "rxjs";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkoutForm: FormGroup;

  user: string = "";
  password: string = "";

  acceso: number = 0;

  usuarios!: Usuario[];
  @Input() usuario!: Usuario;

  constructor(public fb: FormBuilder, private getterJsonService: GetterJsonService, private router:Router) {
    this.checkoutForm = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getterJsonService.getUsuarios()
      .pipe(
        tap((usuarios: Usuario[]) => this.usuarios = usuarios)
      )
      .subscribe();
  }

  onSubmit(): void {
    this.user = this.checkoutForm.get('user')?.value;
    this.password = this.checkoutForm.get('password')?.value;
    if (!this.checkoutForm.valid){
      window.alert("Es necesario rellenar todos los campos");
    }
    else{
      this.usuarios.forEach((usuario) => {
        if (usuario.usuario == this.user && usuario.password == this.password)
          this.acceso = 1;
      });
      if (this.acceso == 1){
        this.router.navigate(['']).then(() => {
          this.checkoutForm.reset();
        });
      }
      else
        window.alert("El usuario o contraseña introducidos es incorrecto");
    }
  }
}

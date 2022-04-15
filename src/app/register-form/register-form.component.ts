import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuario} from "../objetos";
import {tap} from "rxjs";
import {Router} from '@angular/router';
import {UsersService} from "../users/users.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  RegisterForm: FormGroup;
  user: string = "";
  email: string = "";
  name: string = "";
  surname: string = "";
  password: string = "";
  passwordRepeated: string = "";
  registrado: number = 0;
  id: number = -1;

  usuarios!: Usuario[];
  @Input() usuario!: Usuario;

  constructor(public fb: FormBuilder, private router:Router, private usersService: UsersService) {
    this.RegisterForm = this.fb.group({
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      password: ['', [Validators.required]],
      passwordRepeated: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.usersService.getUsuarios()
      .pipe(
        tap((usuarios: Usuario[]) => this.usuarios = usuarios)
      )
      .subscribe();
  }

  onSubmitRegister(): void {
    this.user = this.RegisterForm.get('user')?.value;
    this.email = this.RegisterForm.get('email')?.value;
    this.name = this.RegisterForm.get('name')?.value;
    this.surname = this.RegisterForm.get('surname')?.value;
    this.password = this.RegisterForm.get('password')?.value;
    this.passwordRepeated = this.RegisterForm.get('passwordRepeated')?.value;

    if (!this.RegisterForm.valid){
      window.alert("Es necesario rellenar todos los campos");
    }
    else{
      if (this.passwordRepeated != this.password){
        window.alert("Las contraseñas deben coincidir. Por favor vuelva a intentarlo.");
      }
      else{
        this.usuarios.forEach((usuario) => {
          if (usuario.usuario == this.user && usuario.email != this.email){
            window.alert("Debe de escoger otro usuario, ya existe este usuario");
            this.registrado = 1;
          }
          if (usuario.usuario != this.user && usuario.email == this.email){
            window.alert("El email ya está registrado");
            this.registrado = 1;
          }
          if (usuario.usuario == this.user && usuario.email == this.email){
            window.alert("El email ya está registrado y el usuario ya existe");
            this.registrado = 1;
          }
          if (this.id < usuario.id){
            this.id = usuario.id;
          }
        });
        if (this.registrado != 1){
          const usuarioRegistrado: Usuario = {
            usuario: this.user,
            email: this.email,
            nombre: this.name,
            apellidos: this.surname,
            password: this.password,
            id: this.id + 1,
          };
          this.usersService.setUsuario(usuarioRegistrado).subscribe( data => {
            console.log(data);
          });
          this.router.navigate(['/registeredSuccesful']).then(() => {
            this.RegisterForm.reset();
          });
        }
      }
    }
  }
}


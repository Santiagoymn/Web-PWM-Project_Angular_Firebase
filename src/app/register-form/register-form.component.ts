import {Component, Input, OnInit, Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuarioFire} from "../objetos";
import {tap} from "rxjs";
import {Router} from '@angular/router';
import {UsersService} from "../users/users.service";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {updateProfile} from "@angular/fire/auth";
import { setDoc, doc } from 'firebase/firestore';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css', '../app.component.css']
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

  usuarios!: UsuarioFire[];
  @Input() usuario!: UsuarioFire;

  constructor(public fb: FormBuilder, private router:Router, private usersService: UsersService,
              private firebaseAuth: AngularFireAuth) {
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
        tap((usuarios: UsuarioFire[]) => this.usuarios = usuarios)
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
      window.alert("Es necesario rellenar todos los campos o el formato de algún campo es incorrecto");
    }
    else{
      if(this.passwordRepeated != this.password)
      {
        window.alert("Las contraseñas deben coincidir. Por favor vuelva a intentarlo.");
      }
      else
      {
        this.usuarios.forEach((usuario) => {
          if (usuario.usuario == this.user){
            window.alert("Debe de escoger otro usuario, ya se encuentra registrado");
            this.registrado = 1;
          }
        });
        if (this.registrado != 1) {
          this.firebaseAuth.createUserWithEmailAndPassword(this.email, this.password).
          then((userCredential) => {
            // @ts-ignore
            this.usersService.addNewUser(userCredential.user.uid, this.name, this.surname, this.user)
            this.router.navigate(['/registeredSuccesful']).then(() => {
              this.RegisterForm.reset();
            });
          }).catch((error) => {
            if (error.code == "auth/email-already-in-use") {
              alert("El email se encuentra registrado, por favor introduzca otro");
            } else if (error.code == "auth/invalid-email") {
              alert("El email introducido no es válido");
            } else if (error.code == "auth/operation-not-allowed") {
              alert("Operación no permitida");
            } else if (error.code == "auth/weak-password") {
              alert("La contraseña es muy débil, debe tener mínimo 6 caracteres");
            }
            else{
              alert(error.message);
            }
          });

        }
      }
    }
  }
}


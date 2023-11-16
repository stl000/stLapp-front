import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  formUsuario: FormGroup = new FormGroup({
    nombreID: new FormControl(''),
    apellidosID: new FormControl(''),
    emailID: new FormControl(''),
    usernameID: new FormControl(''),
    telefonoID: new FormControl(''),
    passwordID: new FormControl(''),
    repeatPasswordID: new FormControl('')
  });
  
  registerData = {
    "nombre": '',
    "apellidos": '',
    "email": '',
    "username": '',
    "telefono": '',
    "password": '',
    "repeatPassword": ''
  }

  constructor(private usuarioService:UsuarioService, private snackbar:MatSnackBar) {}

  registrarUsuario(): void {    
    this.registerData.nombre=this.formUsuario.value.nombreID
    this.registerData.apellidos=this.formUsuario.value.apellidosID
    this.registerData.telefono=this.formUsuario.value.telefonoID
    this.registerData.email=this.formUsuario.value.emailID
    this.registerData.username=this.formUsuario.value.usernameID
    this.registerData.password=this.formUsuario.value.passwordID
    this.registerData.repeatPassword=this.formUsuario.value.repeatPasswordID

    if(this.registerData.email == '' || this.registerData.email == null){
      this.snackbar.open("Email requerido","Aceptar",{
        duration:3000,
        verticalPosition:'top',
      })
      return;
    }
    if(this.registerData.username == '' || this.registerData.username == null){
      this.snackbar.open("Nombre de usuario requerido","Aceptar",{
        duration:3000,
        verticalPosition:'top',
      })
      return;
    }
    if(this.registerData.password == '' || this.registerData.password == null
      || this.registerData.repeatPassword == '' || this.registerData.repeatPassword == null){
        this.snackbar.open("Contraseña requerida","Aceptar",{
          duration:3000,
          verticalPosition:'top',
        })
        return;
    }

    if(this.registerData.repeatPassword !== this.registerData.password){
      this.snackbar.open("Las contraseñas son diferentes","Aceptar",{
        duration:3000,
        verticalPosition:'top',
      })
      return;
    }

    console.log(this.registerData);
    this.usuarioService.addUsuario(this.registerData).subscribe(data=>{
      console.log(data)
      Swal.fire("Usuario registrado con éxito","El usuario se ha registrado correctamente", "success").then( () => {
        window.location.href="/login";
      })
    },(error => {
      console.log(error);
      this.snackbar.open("Ha ocurrido un error en el sistema","Aceptar",{
        duration:3000,
        verticalPosition:'top',
      })
    }));
  }

}

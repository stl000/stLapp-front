import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/usuario';
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
  usuario: Usuario = new Usuario();

  constructor(private usuarioService:UsuarioService, private snackbar:MatSnackBar) {}

  registrarUsuario(): void {    
    this.usuario.nombre=this.formUsuario.value.nombreID
    this.usuario.apellidos=this.formUsuario.value.apellidosID
    this.usuario.telefono=this.formUsuario.value.telefonoID
    this.usuario.email=this.formUsuario.value.emailID
    this.usuario.username=this.formUsuario.value.usernameID
    this.usuario.password=this.formUsuario.value.passwordID
    let repeatPassword=this.formUsuario.value.repeatPasswordID

    if(this.usuario.email == '' || this.usuario.email == null){
      this.snackbar.open("Email requerido","Aceptar",{
        duration:3000,
        verticalPosition:'top',
      })
      return;
    }
    if(this.usuario.username == '' || this.usuario.username == null){
      this.snackbar.open("Nombre de usuario requerido","Aceptar",{
        duration:3000,
        verticalPosition:'top',
      })
      return;
    }
    if(this.usuario.password == '' || this.usuario.password == null
      || repeatPassword == '' || repeatPassword == null){
        this.snackbar.open("Contraseña requerida","Aceptar",{
          duration:3000,
          verticalPosition:'top',
        })
        return;
    }

    if(repeatPassword !== this.usuario.password){
      this.snackbar.open("Las contraseñas son diferentes","Aceptar",{
        duration:3000,
        verticalPosition:'top',
      })
      return;
    }

    console.log(this.usuario);
    this.usuarioService.addUsuario(this.usuario).subscribe(data=>{
      console.log(data)
      Swal.fire("Usuario registrado con éxito","El usuario se ha registrado correctamente", "success");
    },(error => {
      console.log(error);
      this.snackbar.open("Ha ocurrido un error en el sistema","Aceptar",{
        duration:3000,
        verticalPosition:'top',
      })
    }));
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  formUsuario: FormGroup = new FormGroup({
    nombreID: new FormControl(''),
    apellidosID: new FormControl(''),
    emailID: new FormControl(''),
    usernameID: new FormControl(''),
    telefonoID: new FormControl(''),
    passwordID: new FormControl(''),
    repeatPasswordID: new FormControl('')
  });

  id!:number;
  usuario: Usuario = new Usuario();
  
  constructor(private aRoute: ActivatedRoute, private usuarioService: UsuarioService, private snackbar:MatSnackBar) {}

  ngOnInit():void{
    this.id=this.aRoute.snapshot.params['id']
    this.usuarioService.getUserById(this.id).subscribe((data:any) => {
      console.log(data)
      this.usuario = data

      this.formUsuario = new FormGroup({
        nombreID: new FormControl(this.usuario.nombre),
        apellidosID: new FormControl(this.usuario.apellidos),
        emailID: new FormControl(this.usuario.email),
        usernameID: new FormControl(this.usuario.username),
        telefonoID: new FormControl(this.usuario.telefono),
        passwordID: new FormControl(''),
        repeatPasswordID: new FormControl('')
      });

    }, error => console.log(error));
  }

  actualizarUsuario(){
    this.usuario.nombre=this.formUsuario.value.nombreID
    this.usuario.apellidos=this.formUsuario.value.apellidosID
    this.usuario.telefono=this.formUsuario.value.telefonoID
    this.usuario.email=this.formUsuario.value.emailID
    this.usuario.username=this.formUsuario.value.usernameID
    if(this.formUsuario.value.passwordID != '' && this.formUsuario.value.repeatPasswordID != ''){
      if(this.formUsuario.value.passwordID == this.formUsuario.value.repeatPasswordID){
        this.usuario.password=this.formUsuario.value.passwordID
      }else{
        this.snackbar.open("Las contraseñas son diferentes","Aceptar",{
          duration:3000,
          verticalPosition:'top',
        })
        return;
      }
    }
    console.log(this.usuario)
    this.usuarioService.updateUsuario(this.id, this.usuario).subscribe((data:any)=>{
      console.log("data de update: "+data)
      Swal.fire("Usuario actualizado con éxito","El usuario se ha actualizado correctamente", "success");
    },(error => {
      console.log(error);
      this.snackbar.open("Ha ocurrido un error en el sistema","Aceptar",{
        duration:3000,
        verticalPosition:'top',
      })
    }));

  }


}

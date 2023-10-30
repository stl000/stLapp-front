import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/usuario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
    
  usuario: Usuario = new Usuario();
  token!: any;
  constructor(private authService:AuthService, private snackbar:MatSnackBar, private router:Router) {}

  loguearUsuario(): void {

    if(this.usuario.username == '' || this.usuario.username == null){
      this.snackbar.open("Nombre de usuario requerido","Aceptar",{
        duration:3000,
        verticalPosition:'top',
      })
      return;
    }
    if(this.usuario.password == '' || this.usuario.password == null){
        this.snackbar.open("Contraseña requerida","Aceptar",{
          duration:3000,
          verticalPosition:'top',
        })
        return;
    }
    console.log(this.usuario)

    this.authService.generateToken(this.usuario).subscribe((data:any)=>{
      console.log(data);
      Swal.fire("Usuario logueado con éxito","El usuario ha iniciado sesión correctamente", "success");
      this.authService.setToken(data.token);
      this.authService.getCurrentUser().subscribe((user:any) =>{
        this.authService.setUser(user);

        console.log("Obtener rol: "+this.authService.getUserRol());
        if(this.authService.getUserRol() == 'ADMIN' || this.authService.getUserRol() == 'USER'){
          this.authService.loginStatusSubject.next(true);
          this.router.navigate(['/dashboard'])
        }else{
          this.authService.logout();
        }
      })
    },(error)=>{
      console.log(error);
      this.snackbar.open("Detalles inválidos , vuelva a intentar !!","Aceptar",{
        duration:3000,
        verticalPosition:'top',
      })
    })



  }

}

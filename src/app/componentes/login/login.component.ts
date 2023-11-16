import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
    
  loginData = {
    "username" : '',
    "password" : ''
  }
  constructor(private authService:AuthService, private snackbar:MatSnackBar, private router:Router) {}

  loguearUsuario(): void {
    if(this.loginData.username == '' || this.loginData.username == null){
      this.snackbar.open("Nombre de usuario requerido","Aceptar",{
        duration:3000,
        verticalPosition:'top',
      })
      return;
    }
    if(this.loginData.password == '' || this.loginData.password == null){
        this.snackbar.open("Contraseña requerida","Aceptar",{
          duration:3000,
          verticalPosition:'top',
        })
        return;
    }
    console.log(this.loginData)

    this.authService.generateToken(this.loginData).subscribe((data:any)=>{
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

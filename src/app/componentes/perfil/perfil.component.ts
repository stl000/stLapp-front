import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  usuario:Usuario = new Usuario();

  constructor(private authService:AuthService){
    
  }

  ngOnInit():void{
    this.usuario = this.authService.getUser();
    /*
    this.authService.getCurrentUser().subscribe((data:any) => {
      this.usuario = data;
    }, error => console.log(error))
    */
  }
  
}

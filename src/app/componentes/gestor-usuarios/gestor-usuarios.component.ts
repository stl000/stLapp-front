import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-gestor-usuarios',
  templateUrl: './gestor-usuarios.component.html',
  styleUrls: ['./gestor-usuarios.component.css']
})
export class GestorUsuariosComponent {

  listaUsuarios!: Usuario[];

  constructor(private usuarioService:UsuarioService, private router:Router) {
    this.obtenerUsuarios();
  }

  obtenerUsuarios():void{
      this.usuarioService.getAllUsers().subscribe((data:any)=>{
        console.log(data);
        this.listaUsuarios=data;
      })
  }

  editarUsuario(nombre:string){
    this.usuarioService.getUserByUsername(nombre).subscribe((data:any) =>{
      console.log(data);
    })
  }

  eliminarUsuario(id:number){
    this.usuarioService.deleteUserById(id).subscribe();
    window.location.reload();
  }

}

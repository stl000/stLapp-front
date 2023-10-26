import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-gestor-usuarios',
  templateUrl: './gestor-usuarios.component.html',
  styleUrls: ['./gestor-usuarios.component.css']
})
export class GestorUsuariosComponent {

  listaUsuarios!: Usuario[];

  constructor(private usuarioService:UsuarioService) {
    this.obtenerUsuarios();
  }

  obtenerUsuarios():void{
      this.usuarioService.getAllUsers().subscribe((data:any)=>{
        console.log(data);
        this.listaUsuarios=data;
      })
  }


}

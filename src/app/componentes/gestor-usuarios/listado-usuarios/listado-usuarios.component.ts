import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent {

  listaUsuarios!: any[];
  paginaActual: number;
  paginasTotales: number;
  numeroUsuarios!: number;
  maximosUsuarios: number = 10;

  usuario!:any;

  constructor(private usuarioService:UsuarioService, private router:Router) {
    this.paginaActual = 1;
    this.paginasTotales = 1;
    this.obtenerUsuarios();
  }

  paginaAnterior(): void {
    this.paginaActual--;
    this.listaUsuarios = [];
    this.obtenerUsuariosPorPagina();
  }

  paginaSiguiente(): void {
    this.paginaActual++;
    this.listaUsuarios = [];
    this.obtenerUsuariosPorPagina();
  }

  obtenerUsuarios():void{
      this.usuarioService.getAllUsers().subscribe((data:any)=>{
        console.log("obtenerusuarios: "+data);
        console.log("Numero de usuarios registrados: "+data.length)
        this.listaUsuarios=data;
      })
  }

  obtenerUsuariosPorPagina():void{
    this.usuarioService.getAllUsersByPage(this.paginaActual).subscribe((data:any)=>{
      console.log(data);
      this.listaUsuarios=data;
      this.numeroUsuarios=data.length;
      this.paginasTotales = Math.round(this.numeroUsuarios / this.maximosUsuarios);
    });
}

  eliminarUsuario(id:number, username:string){
    Swal.fire({
      title: "Usuario "+username,
      text: "¿Esta seguro de que desea eliminar el usuario?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then(resultado => {
      if (resultado.value) {
          this.usuarioService.deleteUserById(id).subscribe();
          window.location.reload();
      } else {
        window.location.reload();
      } 

    })
  }

  editarUsuario(id:number){
    this.router.navigate(['gestor-usuarios/usuario/', id])
  }




}

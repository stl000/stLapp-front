import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-gestor-usuarios',
  templateUrl: './gestor-usuarios.component.html',
  styleUrls: ['./gestor-usuarios.component.css']
})
export class GestorUsuariosComponent {

  listaUsuarios!: Usuario[];

  constructor(){
    
  }


}

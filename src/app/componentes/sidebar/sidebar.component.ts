import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  usuario:Usuario = new Usuario();

  constructor(private authService:AuthService){}

    getUserRol(){
      return this.authService.getUserRol();
    }

    logout(){
      this.authService.logout();
      window.location.href = "/inicio";
    }
}


import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService:AuthService){

  }

  logout(){
    this.authService.logout();
    window.location.href = "/inicio";
  }

  getUsername(){
    return this.authService.getUser().username;
  }

}

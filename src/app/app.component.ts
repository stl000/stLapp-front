import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stLapp-front';
  constructor(private authService:AuthService){

  }

  isLoggedIn(){
    return this.authService.isLoggedIn()
  }
}

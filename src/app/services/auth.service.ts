import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';
import { Usuario } from '../usuario';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  public loginStatusSubject = new Subject<boolean>();

  generateToken(usuario:Usuario){
    return this.httpClient.post(baseURL+"/generate-token", usuario)
  }

  getCurrentUser(){
    return this.httpClient.get(baseURL+"/actual-usuario")
  }

  setToken(token:any){
      localStorage.setItem('token', token);
      console.log("token seteado: "+localStorage.getItem('token'))
  }

  isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  getToken(){
    return localStorage.getItem('token');
  }

  setUser(usuario:any){
    localStorage.setItem('user', JSON.stringify(usuario));
    console.log("user seteado: "+localStorage.getItem('user'))
  }

  getUser(){
    
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout()
      return null;
    }
  }

  getUserRol(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  public loginStatusSubject = new Subject<boolean>();

  generateToken(usuario:any){
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
      console.log("No está logueado")
      console.log("token para el logueo: "+tokenStr)
      return false;
    }else{
      console.log("Si está logueado")
      return true;
    }
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    console.log("token eliminado?: "+localStorage.getItem('token'))
    console.log("user eliminado?: "+localStorage.getItem('user'))
    return true;
  }

  getToken(){
    console.log("token obtenido: "+localStorage.getItem('token'))
    return localStorage.getItem('token');
  }

  setUser(usuario:any){
    localStorage.setItem('user', JSON.stringify(usuario));
    console.log("user seteado: "+localStorage.getItem('user'))
  }

  getUser(){
    
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      console.log("user obtenido: "+userStr)
      return JSON.parse(userStr);
    }else{
      console.log("user obtenido: null")
      this.logout()
      return null;
    }
  }

  getUserRol(){
    let user = this.getUser();
    console.log("authority obtenido: "+user.authorities[0].authority)
    return user.authorities[0].authority;
  }

}

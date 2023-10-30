import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper'
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  
  constructor(private httpClient: HttpClient) { }

  public addUsuario( usuario:Usuario){
    return this.httpClient.post(baseURL+'/usuarios/', usuario)
  }

  getAllUsers(){
    return this.httpClient.get(baseURL+"/usuarios/lista-usuarios")
  }

  getUserByUsername(userName:string){
    return this.httpClient.get(baseURL+"/usuarios/"+userName)
  }

  deleteUserById(id:number){
    return this.httpClient.delete(baseURL+"/usuarios/"+id)
  }

}

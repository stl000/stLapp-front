import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
    
  constructor(private httpClient: HttpClient) { }

  addUsuario( usuario:any){
    return this.httpClient.post(baseURL+'/usuarios/', usuario)
  }

  getAllUsers(){
    return this.httpClient.get(baseURL+"/usuarios/")
  }

  getAllUsersByPage(pagina:number){
    return this.httpClient.get(baseURL+"/usuarios?page="+pagina)
  }

  getUserById(id:number){
    return this.httpClient.get(baseURL+"/usuarios/"+id)
  }

  deleteUserById(id:number){
    return this.httpClient.delete(baseURL+"/usuarios/"+id)
  }

  updateUsuarioById(id:number, usuario: any) {
    return this.httpClient.put(baseURL+"/usuarios/"+id, usuario)
  }

}

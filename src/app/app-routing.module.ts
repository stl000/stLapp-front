import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { GestorUsuariosComponent } from './componentes/gestor-usuarios/gestor-usuarios.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { UsuarioComponent } from './componentes/gestor-usuarios/usuario/usuario.component';
import { ListadoUsuariosComponent } from './componentes/gestor-usuarios/listado-usuarios/listado-usuarios.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'gestor-usuarios', component: GestorUsuariosComponent, children: [ 
    { path: '', component: ListadoUsuariosComponent},
    { path: 'usuario/:id', component: UsuarioComponent}  
  ]},
  { path: 'dashboard', component: DashboardComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { GestorUsuariosComponent } from './componentes/gestor-usuarios/gestor-usuarios.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { UsuarioComponent } from './componentes/gestor-usuarios/usuario/usuario.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule} from '@angular/material/button'
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { authInterceptorProviders } from './services/auth.interceptor';
import { ListadoUsuariosComponent } from './componentes/gestor-usuarios/listado-usuarios/listado-usuarios.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { PaginationComponent } from './componentes/gestor-usuarios/pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    LoginComponent,
    GestorUsuariosComponent,
    PerfilComponent,
    UsuarioComponent,
    PageNotFoundComponent,
    FooterComponent,
    NavbarComponent,
    DashboardComponent,
    ListadoUsuariosComponent,
    SidebarComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatListModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

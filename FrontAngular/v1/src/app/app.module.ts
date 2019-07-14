import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule}from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './Services/service.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RealizarReclamoComponent } from './componentes/realizar-reclamo/realizar-reclamo.component';
import { ReclamoEnviadoComponent } from './componentes/reclamo-enviado/reclamo-enviado.component';
import { RealizarReclamoEmbebidaComponent } from './componentes/realizar-reclamo-embebida/realizar-reclamo-embebida.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    PerfilComponent,
    RealizarReclamoComponent,
    ReclamoEnviadoComponent,
    RealizarReclamoEmbebidaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

   
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

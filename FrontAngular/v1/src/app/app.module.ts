/*------------*/
/* APP MODULE */
/*------------*/
// Aqui se importan todos los componentes utilizados en el proyecto angular,
// Además de sus referencias en @NgModule.


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule}from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './Services/service.service';



import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RealizarReclamoComponent } from './componentes/realizar-reclamo/realizar-reclamo.component';
import { ReclamoEnviadoComponent } from './componentes/reclamo-enviado/reclamo-enviado.component';
import { HomeEmpresaComponent } from './componentes/home-empresa/home-empresa.component';
import { RealizarReclamoEmbebidaComponent } from './componentes/realizar-reclamo-embebida/realizar-reclamo-embebida.component';
import { RealizarSugerenciaComponent } from './componentes/realizar-sugerencia/realizar-sugerencia.component';
import { BusquedaIdComponent } from './componentes/busqueda-id/busqueda-id.component';
import { RegistroEmpresaComponent } from './componentes/registro-empresa/registro-empresa.component';
import { LoginEmpresaComponent } from './componentes/login-empresa/login-empresa.component';
import { PerfilEmpresaComponent } from './componentes/perfil-empresa/perfil-empresa.component';
import { ReclamoAnonimoComponent } from './componentes/anonimo/reclamo-anonimo/reclamo-anonimo.component';
import { SugerenciaAnonimoComponent } from './componentes/anonimo/sugerencia-anonimo/sugerencia-anonimo.component';
import { ReclamoSugerenciaEnviadoComponent } from './componentes/anonimo/reclamo-sugerencia-enviado/reclamo-sugerencia-enviado.component';
import { EmpresaListaReclamosComponent } from './componentes/empresa/empresa-lista-reclamos/empresa-lista-reclamos.component';
import { EmpresaListaSugerenciasComponent } from './componentes/empresa/empresa-lista-sugerencias/empresa-lista-sugerencias.component';
import { EmpresaResponderReclamoComponent } from './componentes/empresa/empresa-responder-reclamo/empresa-responder-reclamo.component';
import { EmpresaResponderSugerenciaComponent } from './componentes/empresa/empresa-responder-sugerencia/empresa-responder-sugerencia.component';
import { MiPerfilComponent } from './componentes/mi-perfil/mi-perfil.component';
import { NuestroEquipoComponent } from './componentes/nuestro-equipo/nuestro-equipo.component';
import { EstadisticasComponent } from './componentes/empresa/estadisticas/estadisticas.component';
import { ChartsModule } from 'ng2-charts';
import { TrabajadoresComponent } from './componentes/empresa/trabajadores/trabajadores.component';
import { AgregarTrabajadoresComponent } from './componentes/empresa/agregar-trabajadores/agregar-trabajadores.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    PerfilComponent,
    RealizarReclamoComponent,
    ReclamoEnviadoComponent,
    HomeEmpresaComponent,
    RealizarReclamoEmbebidaComponent,
    RealizarSugerenciaComponent,
    BusquedaIdComponent,
    RegistroEmpresaComponent,
    LoginEmpresaComponent,
    PerfilEmpresaComponent,
    ReclamoAnonimoComponent,
    SugerenciaAnonimoComponent,
    ReclamoSugerenciaEnviadoComponent,
    EmpresaListaReclamosComponent,
    EmpresaListaSugerenciasComponent,
    EmpresaResponderReclamoComponent,
    EmpresaResponderSugerenciaComponent,
    MiPerfilComponent,
    NuestroEquipoComponent,
    EstadisticasComponent,
    TrabajadoresComponent,
    AgregarTrabajadoresComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule

   
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

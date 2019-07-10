import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RealizarReclamoComponent } from './componentes/realizar-reclamo/realizar-reclamo.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"registrar",component:RegistroUsuarioComponent},
  {path:"perfil",component:PerfilComponent},
  {path:"realizar_reclamo",component:RealizarReclamoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

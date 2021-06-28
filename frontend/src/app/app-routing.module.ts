import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/componentes/home/home.component'
import {CrearUsuarioComponent} from '../app/componentes/crear-usuario/crear-usuario.component';
import {ClienteVerReclamosComponent} from '../app/componentes/cliente-ver-reclamos/cliente-ver-reclamos.component';
import {ClienteNuevoReclamoComponent} from '../app/componentes/cliente-nuevo-reclamo/cliente-nuevo-reclamo.component';
import {AdminVerUsuariosComponent} from '../app/componentes/admin-ver-usuarios/admin-ver-usuarios.component';
import {AdminVerReclamosComponent} from '../app/componentes/admin-ver-reclamos/admin-ver-reclamos.component';
import {AdminEdReclamoComponent} from '../app/componentes/admin-ed-reclamo/admin-ed-reclamo.component';
import {RecuperarComponent} from '../app/componentes/recuperar/recuperar.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"crear",component:CrearUsuarioComponent},
  {path:"verreclamos/:rut",component:ClienteVerReclamosComponent},
  {path:"nuevoreclamo/:rut",component:ClienteNuevoReclamoComponent},
  {path:"verusuarios/:rut",component:AdminVerUsuariosComponent},
  {path:"admin/verreclamos/:rut",component:AdminVerReclamosComponent},
  {path:"admin/editarreclamo/:rut/:id",component:AdminEdReclamoComponent},
  {path:"recuperar",component:RecuperarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

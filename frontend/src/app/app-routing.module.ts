import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/componentes/home/home.component'
import {CrearUsuarioComponent} from '../app/componentes/crear-usuario/crear-usuario.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"crear",component:CrearUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ClienteVerReclamosComponent } from './componentes/cliente-ver-reclamos/cliente-ver-reclamos.component';
import { ClienteNuevoReclamoComponent } from './componentes/cliente-nuevo-reclamo/cliente-nuevo-reclamo.component';
import { AdminVerUsuariosComponent } from './componentes/admin-ver-usuarios/admin-ver-usuarios.component';
import { AdminVerReclamosComponent } from './componentes/admin-ver-reclamos/admin-ver-reclamos.component';
import { AdminEdReclamoComponent } from './componentes/admin-ed-reclamo/admin-ed-reclamo.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { BuscarPrioridadPipe } from './pipes/buscar-prioridad.pipe';
import { BuscarCategoriaPipe } from './pipes/buscar-categoria.pipe';
import { FormsModule } from '@angular/forms';
import { RecuperarComponent } from './componentes/recuperar/recuperar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CrearUsuarioComponent,
    ClienteVerReclamosComponent,
    ClienteNuevoReclamoComponent,
    AdminVerUsuariosComponent,
    AdminVerReclamosComponent,
    AdminEdReclamoComponent,
    BuscarPrioridadPipe,
    BuscarCategoriaPipe,
    RecuperarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule,
    MatSliderModule ,
    MatButtonModule,
    MatSelectModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

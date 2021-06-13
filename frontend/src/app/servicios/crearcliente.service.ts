import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from  'rxjs';
import {Cliente} from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class CrearclienteService {
  url="http://localhost/proyectoWeb/backend/";
  constructor(private http:HttpClient) { 

  }
  Guardar(Lista:Array<Cliente>):Observable<any>{
    console.log("LA LISTA ENVIADA ES "+Lista[0].nombre);
    return this.http.post(`${this.url}crearUsuario.php`,JSON.stringify(Lista));

    
 }
}

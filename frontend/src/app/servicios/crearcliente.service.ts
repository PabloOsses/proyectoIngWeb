import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from  'rxjs';
import {Cliente} from '../interfaces/cliente';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CrearclienteService {
  url=environment.apiUrl;
  constructor(private http:HttpClient) { 

  }
  Guardar(lista:Array<Cliente>):Observable<any>{
    console.log("LA LISTA ENVIADA ES "+lista[0].nombre);
    return this.http.post(`${this.url}crearUsuario.php`,JSON.stringify(lista));

    
 }
}

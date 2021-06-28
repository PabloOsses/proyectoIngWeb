import { Injectable } from '@angular/core';
import {Reclamo} from '../interfaces/reclamo';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from  'rxjs';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ReclamosclienteService {
  url=environment.apiUrl;
  constructor(private http:HttpClient) { }
  /*se obtienen los reclamos de un cliente*/
  obtenerReclamos(rut:string):Observable<any>{
    let headers= new HttpHeaders();
    headers.append('Content-Type','application/json');

    return this.http.get(`${this.url}clienteReclamos.php?rut=${JSON.stringify(rut)}`);
  }
  /*crea un reclamo de un cliente especifico*/
  crearReclamo(lista:Array<Reclamo>):Observable<any>{
    //console.log("LA LISTA ENVIADA ES "+lista[0].asunto);
    return this.http.post(`${this.url}nuevoReclamo.php`,JSON.stringify(lista));
  }
}

import { Injectable } from '@angular/core';
import {Reclamo} from '../interfaces/reclamo';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from  'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReclamosclienteService {
  url="http://localhost/proyectoWeb/backend/";
  constructor(private http:HttpClient) { }
  obtenerReclamos(rut:string):Observable<any>{
    let headers= new HttpHeaders();
    headers.append('Content-Type','application/json');

    return this.http.get(`${this.url}clienteReclamos.php?rut=${JSON.stringify(rut)}`);
  }
  crearReclamo(lista:Array<Reclamo>):Observable<any>{
    console.log("LA LISTA ENVIADA ES "+lista[0].asunto);
    return this.http.post(`${this.url}nuevoReclamo.php`,JSON.stringify(lista));
  }
}

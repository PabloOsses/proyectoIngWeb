import { Injectable } from '@angular/core';
import {Reclamo} from '../interfaces/reclamo';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from  'rxjs';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminEdReclamoService {
  url=environment.apiUrl;
  constructor(private http:HttpClient) { }
  adminConsultarReclamo(id:number):Observable<any>{
    let headers= new HttpHeaders();
    headers.append('Content-Type','application/json');

    return this.http.get(`${this.url}adminConsultarReclamo.php?id=${JSON.stringify(id)}`);
  }
  adminModificarReclamo(lista:Array<Reclamo>):Observable<any>{
    console.log("LA LISTA ENVIADA ES ");
    return this.http.post(`${this.url}adminModificarReclamo.php`,JSON.stringify(lista));
  }
}

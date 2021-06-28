import { Injectable } from '@angular/core';
import {Cliente} from '../interfaces/cliente';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from  'rxjs';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminreportesService {
  url=environment.apiUrl;
  constructor(private http:HttpClient) { }
  /*devuelve todos los usuarios registrados */
  obtenerUsuarios():Observable<any>{
    let headers= new HttpHeaders();
    headers.append('Content-Type','application/json');

    return this.http.get(`${this.url}adminUsuarios.php`);
  }
  /*devuelve todos los reclamos */
  obtenerReclamos():Observable<any>{
    let headers= new HttpHeaders();
    headers.append('Content-Type','application/json');

    return this.http.get(`${this.url}adminReclamos.php`);
  }
}

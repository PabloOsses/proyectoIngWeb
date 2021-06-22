import { Injectable } from '@angular/core';
import {Cliente} from '../interfaces/cliente';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from  'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminreportesService {
  url="http://localhost/proyectoWeb/backend/";
  constructor(private http:HttpClient) { }
  obtenerUsuarios():Observable<any>{
    let headers= new HttpHeaders();
    headers.append('Content-Type','application/json');

    return this.http.get(`${this.url}adminUsuarios.php`);
  }
  obtenerReclamos():Observable<any>{
    let headers= new HttpHeaders();
    headers.append('Content-Type','application/json');

    return this.http.get(`${this.url}adminReclamos.php`);
  }
}

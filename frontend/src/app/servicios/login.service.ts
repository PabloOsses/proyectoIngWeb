import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from  'rxjs';
import {Login} from '../interfaces/login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost/proyectoWeb/backend/";
  constructor(private http:HttpClient) { }

  validarLogin(correo:string,password:string):Observable<any>{
    let headers= new HttpHeaders();
    headers.append('Content-Type','application/json');
    //const params= new HttpParams();
    let params = new HttpParams().set('correo', correo).set('password',password);
    //params.set("correo",correo);
    //params.set("password",password);
    console.log("correo es: "+ correo)
    var lista:string[] = new Array(correo,password); 
    console.log("validar login"+ correo);
    //return this.http.get(`${this.url}login.php`,{params:params});
    return this.http.get(`${this.url}login.php?correo=${JSON.stringify(correo)}&password=${JSON.stringify(password)}`);
    //return this.http.get(`${this.url}login.php?correo=${correo}&password=${password}`);
  }
}

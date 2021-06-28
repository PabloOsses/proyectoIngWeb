import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from  'rxjs';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url=environment.apiUrl;
  textoClave:string='';
  constructor(private http:HttpClient) {
    
   }
  /*valida el login de un cliente o el administrador */
  validarLogin(correo:string,password:string):Observable<any>{
    let headers= new HttpHeaders();
    headers.append('Content-Type','application/json');
    //const params= new HttpParams();
    let params = new HttpParams().set('correo', correo).set('password',password);
    //params.set("correo",correo);
    //params.set("password",password);
    //console.log("correo es: "+ correo)
    var lista:string[] = new Array(correo,password); 
    //console.log("validar login"+ correo);
    //return this.http.get(`${this.url}login.php`,{params:params});
    return this.http.get(`${this.url}login.php?correo=${JSON.stringify(correo)}&password=${JSON.stringify(password)}`);
    //return this.http.get(`${this.url}login.php?correo=${correo}&password=${password}`);
  }

}
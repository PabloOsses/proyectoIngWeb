import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from  'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost/proyectoWeb/backend/";
  constructor(private http:HttpClient) { }

  validarLogin(correo:string,password:string):Observable<any>{
    let headers= new HttpHeaders();
    headers.append('Content-Type','application/json');
    const params= new HttpParams();
    params.set("correo",correo);
    params.set("password",password);
    console.log("correo es: "+ correo)
    var lista:string[] = new Array(correo,password); 
    
    return this.http.get(`${this.url}login_home.php`,{params:params});
    //return this.http.get(`${this.url}login_home.php`,JSON.stringify(lista));
  }
}

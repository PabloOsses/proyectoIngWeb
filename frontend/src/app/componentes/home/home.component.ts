import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../../servicios/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formulario:FormGroup;
  correo:AbstractControl;
  password:AbstractControl;
  
  lista:Array<String>=[];
  textoform:string='';
  imagen:string='';
  
  constructor(private fb:FormBuilder, private route:ActivatedRoute, private login:LoginService) {
    this.formulario=this.fb.group({
      correo:["",[Validators.required, Validators.maxLength(30), Validators.email]],
      password:["",[Validators.required, Validators.maxLength(30)]],
      
      /*[,[validaciones(en este caso requerido, maximo de caracteres y email)]] */
      
    });
    this.correo=this.formulario.controls["correo"];
    this.password=this.formulario.controls["password"];
    
    //this.generar();
    
   }

  ngOnInit(): void {
    this.correo=this.formulario.get('correo') as FormGroup;
    this.password=this.formulario.get('password') as FormGroup;
   
    //this.generar();
  }
  ingresar(){
    console.log('INGRESAR');
    
    
    this.login.validarLogin(this.correo.value,this.password.value).subscribe(datos=>{
      if (datos == null){
        /*Este es el caso donde el correo y la contraseña ingresados no son validos */
        console.log("DATOS ESTA VACIO"); 
      }else{
        var rut = datos.rut;
        if(datos.tipo==='administrador'){
          /*en el caso que ingrese un administrador */
          console.log('Bienvenido admin');
          window.location.href="/verusuarios/"+rut;
        }else{
        /*en el caso que ingrese un cliente */

        
        this.lista.push(datos.rut);
        window.location.href="/verreclamos/"+rut;
        }
      }
      //console.log("lista es "+ this.lista);
    });
  }
  recuperar(){
    window.location.href="/recuperar/";
  }
 


}

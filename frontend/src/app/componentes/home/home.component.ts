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

  constructor(private fb:FormBuilder, private route:ActivatedRoute, private login:LoginService) {
    this.formulario=this.fb.group({
      correo:["",[Validators.required, Validators.maxLength(30)]],
      password:["",[Validators.required, Validators.maxLength(30)]],
      /*[,[validaciones(en este caso requerido y maximo de caracteres)]] */
      
      /*Por alguna razon incluso con validaciones, no funciona el required */
    });
    this.correo=this.formulario.controls["correo"];
    this.password=this.formulario.controls["password"];
    
   }

  ngOnInit(): void {
    this.correo=this.formulario.get('correo') as FormGroup;
    this.password=this.formulario.get('password') as FormGroup;
  }
  ingresar(){
    console.log('INGRESAR');
    this.login.validarLogin(this.correo.value,this.password.value).subscribe(datos=>{
       if (datos== null){
         console.log("DATOS ESTA VACIO");
      }else{
        console.log(datos);
       }

      //console.log("DATO RECIVIDO EN METODO POST"+ datos);
    });
  }
}

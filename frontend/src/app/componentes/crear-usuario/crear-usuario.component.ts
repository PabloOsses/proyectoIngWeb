import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Cliente} from '../../interfaces/cliente';
import {CrearclienteService} from '../../servicios/crearcliente.service';
@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {
  formulario:FormGroup;
  rut:AbstractControl;
  nombre:AbstractControl;
  apellido:AbstractControl;
  residencia:AbstractControl;
  region:AbstractControl;
  comuna:AbstractControl;
  correo:AbstractControl;
  password:AbstractControl;
  cpassword:AbstractControl;

  Lista2:Array<Cliente>=[];


  constructor(private fb:FormBuilder, private route:ActivatedRoute,private servicioCliente:CrearclienteService) {
    this.formulario=this.fb.group({
      rut:["",[Validators.required, Validators.maxLength(30)]],
      nombre:["",[Validators.required, Validators.maxLength(30)]],
      apellido:["",[Validators.required, Validators.maxLength(30)]],
      /*[,[validaciones(en este caso requerido y maximo de caracteres)]] */
      residencia:["",[Validators.required, Validators.maxLength(150)]],
      /*Por alguna razon incluso con validaciones, no funciona el required */
      region:["",[Validators.required, Validators.maxLength(30)]],
      comuna:["",[Validators.required, Validators.maxLength(30)]],
      correo:["",[Validators.required, Validators.maxLength(30)]],
      password:["",[Validators.required, Validators.maxLength(30)]],
      cpassword:["",[Validators.required, Validators.maxLength(30)]],
    });
    this.rut=this.formulario.controls["rut"];
    this.nombre=this.formulario.controls["nombre"];
    this.apellido=this.formulario.controls["apellido"];
    this.residencia=this.formulario.controls["residencia"];
    this.region=this.formulario.controls["region"];
    this.comuna=this.formulario.controls["comuna"];
    this.correo=this.formulario.controls["correo"];
    this.password=this.formulario.controls["password"];
    this.cpassword=this.formulario.controls["cpassword"];
   }

  ngOnInit(): void {
    this.rut=this.formulario.get('rut') as FormGroup;
    this.nombre=this.formulario.get('nombre') as FormGroup;
    this.apellido=this.formulario.get('apellido') as FormGroup;
    this.residencia=this.formulario.get('residencia') as FormGroup;
    this.region=this.formulario.get('region') as FormGroup;
    this.comuna=this.formulario.get('comuna') as FormGroup;
    this.correo=this.formulario.get('correo') as FormGroup;
    this.password=this.formulario.get('password') as FormGroup;
    this.cpassword=this.formulario.get('cpassword') as FormGroup;
  }
  Crear(){
    //console.log('creado usuario: '+ this.nombre.value);
    var test: Cliente= {
      rut:this.rut.value,
      nombre:this.nombre.value,
      apellido:this.apellido.value,
      residencia:this.residencia.value,
      region:this.region.value,
      comuna:this.comuna.value,
      correo:this.correo.value,
      password:this.password.value,
  
    };
    this.Lista2.push(test);
    this.servicioCliente.Guardar(this.Lista2).subscribe(datos=>{
       
      //console.log("DATO RECIVIDO EN METODO POST"+ datos);
    });
    
  }

}

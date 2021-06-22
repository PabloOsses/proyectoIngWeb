import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Reclamo} from '../../interfaces/reclamo'
import {ReclamosclienteService} from '../../servicios/reclamoscliente.service';
@Component({
  selector: 'app-cliente-nuevo-reclamo',
  templateUrl: './cliente-nuevo-reclamo.component.html',
  styleUrls: ['./cliente-nuevo-reclamo.component.scss']
})
export class ClienteNuevoReclamoComponent implements OnInit {
  rut:string;
  formulario:FormGroup;
  prioridad:AbstractControl;
  categoria:AbstractControl;
  asunto:AbstractControl;
  descripcion:AbstractControl;
  lista:Array<Reclamo>=[];
  
  constructor(private fb:FormBuilder, private route:ActivatedRoute,private reclamoCliente:ReclamosclienteService) { 
    this.rut='none';
    this.formulario=this.fb.group({
      prioridad:["",[Validators.required, Validators.maxLength(30)]],
      categoria:["",[Validators.required, Validators.maxLength(30)]],
      asunto:["",[Validators.required, Validators.maxLength(30)]],
      /*[,[validaciones(en este caso requerido y maximo de caracteres)]] */
      descripcion:["",[Validators.required, Validators.maxLength(150)]],
      /*Por alguna razon incluso con validaciones, no funciona el required */
      
    });
    this.prioridad=this.formulario.controls["prioridad"];
    this.categoria=this.formulario.controls["categoria"];
    this.asunto=this.formulario.controls["asunto"];
    this.descripcion=this.formulario.controls["descripcion"];
    
   
  }

  ngOnInit(): void {
    this.prioridad=this.formulario.get('prioridad') as FormGroup;
    this.categoria=this.formulario.get('categoria') as FormGroup;
    this.asunto=this.formulario.get('asunto') as FormGroup;
    this.descripcion=this.formulario.get('descripcion') as FormGroup;
    this.route.paramMap.subscribe(params=>{
          
      let rut = params.get("rut");
      this.rut=rut!;
    });
  }
  Crear(){
    var test: Reclamo = {
      id:0,
      rut:this.rut,
      categoria:this.categoria.value,
      prioridad:this.prioridad.value,
      asunto:this.asunto.value,
      descripcion:this.descripcion.value,
      estado:"abierto",
      respuesta:"NONE",
    };
    
    this.lista.push(test);
    this.reclamoCliente.crearReclamo(this.lista).subscribe(datos=>{
      
      console.log("DATO RECIVIDO EN METODO POST");
    });
    window.location.href="/verreclamos/"+this.rut;
    
  }
  salir(){
    console.log("SALIR");
    window.location.href="/verreclamos/"+this.rut;
  }
}

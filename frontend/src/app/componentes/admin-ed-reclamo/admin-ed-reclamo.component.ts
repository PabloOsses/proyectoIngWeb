import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AdminEdReclamoService} from '../../servicios/admin-ed-reclamo.service';
import {Reclamo} from '../../interfaces/reclamo'
@Component({
  selector: 'app-admin-ed-reclamo',
  templateUrl: './admin-ed-reclamo.component.html',
  styleUrls: ['./admin-ed-reclamo.component.scss']
})
export class AdminEdReclamoComponent implements OnInit {
  formulario:FormGroup;
  estado:AbstractControl;
  respuesta:AbstractControl;
  asunto:string;
  descripcion:string;
  rutAd:string;
  rut:string;
  id:string;
  prioridad:string;
  categoria:string;
  lista:Array<Reclamo>=[];
  constructor(private route:ActivatedRoute,private fb:FormBuilder,private adminEditar:AdminEdReclamoService) {
    this.formulario=this.fb.group({
      titulo:["",[Validators.required, Validators.maxLength(30)]],
      estado:["",[Validators.required, Validators.maxLength(30)]],
      /*[,[validaciones(en este caso requerido y maximo de caracteres)]] */
      descripcion:["",[Validators.required, Validators.maxLength(150)]],
      respuesta:["",[Validators.required, Validators.maxLength(30)]],
    });
    this.rutAd='none';
    this.respuesta=this.formulario.controls["respuesta"];
    this.estado=this.formulario.controls["estado"];
    this.asunto='none';
    this.descripcion='none';
    this.rut='none';
    this.id='none';
    this.categoria='none';
    this.prioridad='none'
  }

  ngOnInit(): void {
    this.estado=this.formulario.get('estado') as FormGroup;
    this.respuesta=this.formulario.get('respuesta') as FormGroup;
    this.route.paramMap.subscribe(params=>{
          
      let intento = params.get("id");
      this.rutAd = params.get("rut")!;
      console.log("id es"+ intento);
      console.log("RUT AD ES"+ this.rutAd);
      this.adminEditar.adminConsultarReclamo(+intento!).subscribe(datos=>{
        console.log("reclamo id: "+datos.id);
        console.log("reclamo JEJEJJEJE: "+datos.asunto);
        this.id=datos.id;
      });
    });

  }
  editar(){
    /*var test: Reclamo = {
      id:+this.id,
      rut:'none',
      categoria:this.categoria,
      prioridad:this.prioridad,
      asunto:this.asunto,
      descripcion:this.descripcion,
      estado:this.respuesta.value,
      respuesta:this.respuesta.value,
    };*/
    var test: Reclamo = {
      id:+this.id,
      rut:'none',
      categoria:'none',
      prioridad:'none',
      asunto:'none',
      descripcion:'none',
      estado:this.estado.value,
      respuesta:this.respuesta.value,
    };
    this.lista.push(test);
    this.adminEditar.adminModificarReclamo(this.lista).subscribe(datos=>{
      
      console.log("DATO RECIVIDO EN METODO POST");
      window.location.href="/admin/verreclamos/"+this.rutAd;
    });

  }

}
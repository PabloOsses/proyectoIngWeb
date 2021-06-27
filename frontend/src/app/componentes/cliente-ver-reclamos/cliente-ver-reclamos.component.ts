import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReclamosclienteService} from '../../servicios/reclamoscliente.service';
import {Reclamo} from '../../interfaces/reclamo';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-cliente-ver-reclamos',
  templateUrl: './cliente-ver-reclamos.component.html',
  styleUrls: ['./cliente-ver-reclamos.component.scss']
})
export class ClienteVerReclamosComponent implements OnInit {
  lista:Array<Reclamo>=[];
  formulario:FormGroup;
  //lista:Array<any>=[];
  rut:string;
  condicion:string="";
  palabrafiltro:string='';
  //rut global para redireccionar a crear reclamo
  constructor(private route:ActivatedRoute , private reclamoCliente:ReclamosclienteService,private fb:FormBuilder) {
     this.rut='none';
     this.formulario=this.fb.group({
      texto:["",[Validators.required]]
    });
  }
    
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
          
      let rut = params.get("rut");
      
      console.log("rut es:"+rut);
      this.rut=rut!;
      //subscribe edntro de otro subscribe
      this.reclamoCliente.obtenerReclamos(rut!).subscribe(datos=>{
        if (datos == null){
          this.condicion="vacio";
        }else{
          console.log("reclamo largo: "+ datos.length);
          console.log("reclamo id: "+datos[0].id);
          console.log("reclamo rut: "+datos[0].rut);
          console.log("reclamo rut: "+datos[0].asunto);
          console.log("reclamo rut: "+datos[0].descripcion);
          console.log("reclamo rut: "+datos[0].prioridad);
          //this.lista.push(datos.rut);
          if (typeof +datos[0].id === "number") {
            console.log("ID ES INT ");
          }
          if (typeof datos[0].id === "string") {
            console.log("ID ES STRING ");
          }
          
          for ( let i=0;i<datos.length;i++){
            var test: Reclamo = {
              id:+datos[i].id,
              rut:datos[i].rut,
              categoria:datos[i].categoria,
              prioridad:datos[i].prioridad,
              asunto:datos[i].asunto,
              descripcion:datos[i].descripcion,
              estado:datos[i].estado,
              respuesta:datos[i].respuesta,
            };
            if(test.respuesta==="NONE"){
              test.respuesta="";
            }
            this.lista.push(test);
          }
          
          console.log("lista lasrgo "+ this.lista.length);
        }
        
        
      });
    });
  }
  nuevoreclamo(){
    console.log("nuevo reclamo");
    window.location.href="/nuevoreclamo/"+this.rut;
  }
  salir(){
    window.location.href="";
  }
  buscarPrioridad(){
    this.palabrafiltro=this.formulario.get('texto')?.value;
    //console.log(this.formulario.get('texto')?.value);
  }
}

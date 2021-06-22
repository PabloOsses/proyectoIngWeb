import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Reclamo} from '../../interfaces/reclamo';
import {AdminreportesService} from '../../servicios/adminreportes.service';
@Component({
  selector: 'app-admin-ver-reclamos',
  templateUrl: './admin-ver-reclamos.component.html',
  styleUrls: ['./admin-ver-reclamos.component.scss']
})
export class AdminVerReclamosComponent implements OnInit {
  lista:Array<Reclamo>=[];
  rut:string;
  constructor(private route:ActivatedRoute,private adminReporte:AdminreportesService) {
    this.rut='none';
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
          
      let rut = params.get("rut");
      this.rut=rut!;
      //subscribe edntro de otro subscribe
      this.adminReporte.obtenerReclamos().subscribe(datos=>{
        if (datos == null){
          console.log("RECLAMO ESTA VACIO");
        }else{
          console.log("reclamo largo: "+ datos.length);
          console.log("reclamo id: "+datos[0].id);
          console.log("reclamo rut: "+datos[0].rut);
          console.log("reclamo asunto: "+datos[0].asunto);
          console.log("reclamo descrip: "+datos[0].descripcion);
          console.log("reclamo prioridad: "+datos[0].prioridad);
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
            this.lista.push(test);
          }
          console.log("lista lasrgo "+ this.lista.length);
        }
        
        
      });
    });
  }
  salir(){
    console.log("SALIR");
      window.location.href="/verusuarios/"+this.rut;
  }

}

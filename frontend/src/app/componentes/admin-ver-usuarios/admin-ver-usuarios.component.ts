import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminreportesService} from '../../servicios/adminreportes.service';
import {Cliente} from '../../interfaces/cliente';
@Component({
  selector: 'app-admin-ver-usuarios',
  templateUrl: './admin-ver-usuarios.component.html',
  styleUrls: ['./admin-ver-usuarios.component.scss']
})
export class AdminVerUsuariosComponent implements OnInit {
  lista:Array<Cliente>=[];
  rut:string;
  constructor(private route:ActivatedRoute,private adminReporte:AdminreportesService) {
    this.rut='none';
   }
    
  ngOnInit(): void {
    /*subscribe para obtener los parametros enviados 
    desde otra pagina */
    this.route.paramMap.subscribe(params=>{
          
      let rut = params.get("rut");
      
      //console.log("rut es:"+rut);
      this.rut=rut!;
      //subscribe dentro de otro subscribe

      /*obtiene los usuarios registrados */
      this.adminReporte.obtenerUsuarios().subscribe(datos=>{
        if (datos == null){
          console.log("RECLAMO ESTA VACIO");
        }else{
          /*console.log("reclamo largo: "+ datos.length);
          console.log("reclamo rut: "+datos[0].rut);
          console.log("reclamo rut: "+datos[0].nombre);
          console.log("reclamo rut: "+datos[0].apellido);*/
          
          /*no es necesario obtener la contraseña */
          for ( let i=0;i<datos.length;i++){
            var test: Cliente = {
              rut:datos[i].rut,
              nombre:datos[i].nombre,
              apellido:datos[i].apellido,
              residencia:datos[i].residencia,
              region:datos[i].region,
              comuna:datos[i].comuna,
              correo:datos[i].correo,
              password:'private'
            };
            this.lista.push(test);
          }
          //console.log("lista largo "+ this.lista.length);
        }
        
        
      });
    });
  }
  VerReclamos(){
    console.log('ver reclamos');
    window.location.href="/admin/verreclamos/"+this.rut;
  }
  salir(){
    window.location.href="";
  }

}

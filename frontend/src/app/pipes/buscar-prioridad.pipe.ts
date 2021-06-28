/*CONTRARIO AL NOMBRE DE ESTE ELEMENTEO ,
ESTE PIPE BUSCA POR PRIORIDAD , CATEGORIA Y ESTADO */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarPrioridad'
})
export class BuscarPrioridadPipe implements PipeTransform {

  transform(Lista:any, palabra: string): any{
    const resultado:any=[];
    let args=palabra.toLowerCase();
    if(args===''){
      return Lista;
    }
    if(args==='alta' || args==='media' || args==='baja' ){
      Lista.forEach((element:any) => {
          if(element.prioridad.toLowerCase().indexOf(args.toLowerCase())>-1){
            /*Busca el reclamo por prioridad*/
            resultado.push(element);
          }
      });
        return resultado;
    }
    if(args==='solicitud generica' || args==='solicitud de cambio' || args==='incidente' || args==='problema' || args==='solicitud de hardware' || args==='solicitud de software nuevo'){
      Lista.forEach((element:any) => {
        if(element.categoria.toLowerCase().indexOf(args.toLowerCase())>-1){
           /*Busca el reclamo por categoria*/
          resultado.push(element);
        }
      });
      return resultado;
    }
    if(args==='abierto' || args==='proceso' || args==='cerrado'){
      Lista.forEach((element:any) => {
        if(element.estado.toLowerCase().indexOf(args.toLowerCase())>-1){
          /*Busca el reclamo por estado*/
          resultado.push(element);
        }
      });
      return resultado;
    }
    return Lista;
    
  }

}

//PIPE NO UTILIZADO , IGNORAR, ME PREOCUPA ELIMINAR ESTO Y QUE CAUSE PROBLEMAS
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarCategoria'
})
export class BuscarCategoriaPipe implements PipeTransform {
  //PIPE NO UTILIZADO , IGNORAR
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-cliente-ver-reclamos',
  templateUrl: './cliente-ver-reclamos.component.html',
  styleUrls: ['./cliente-ver-reclamos.component.scss']
})
export class ClienteVerReclamosComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
          
      let rut = params.get("rut");
      
      console.log("rut es:"+rut);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators, AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.scss']
})
export class RecuperarComponent implements OnInit {
  condicionContr:string='';
  formulario:FormGroup;
  correo:AbstractControl;
  constructor(private fb:FormBuilder) {
    this.formulario=this.fb.group({
      correo:["",[Validators.required, Validators.maxLength(30), Validators.email]],
  });
  this.correo=this.formulario.controls["correo"];
}

  ngOnInit(): void {
    this.correo=this.formulario.get('correo') as FormGroup;
  }
  recuperar(){
    this.condicionContr='no'
  }
  salir(){
    /*boton salir */
    window.location.href="";
  }
}

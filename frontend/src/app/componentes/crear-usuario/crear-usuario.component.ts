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
  seleccionado:string='';
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
  comunas:Array<String>=[];
  
  condicionContr:string='';
  condicionRut:string='';
  hide = true;
  hide2 = true;

  
  
  constructor(private fb:FormBuilder, private route:ActivatedRoute,private servicioCliente:CrearclienteService) {
    this.formulario=this.fb.group({
      rut:["",[Validators.required, Validators.maxLength(30)]],
      nombre:["",[Validators.required, Validators.maxLength(30)]],
      apellido:["",[Validators.required, Validators.maxLength(30)]],
      /*[,[validaciones(en este caso requerido y maximo de caracteres)]] */
      residencia:["",[Validators.required, Validators.maxLength(150)]],
      
      region:["",[Validators.required, Validators.maxLength(30)]],
      comuna:["",[Validators.required, Validators.maxLength(30)]],
      correo:["",[Validators.required, Validators.maxLength(30),Validators.email]],
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
    /*ESTO CREA AL USUARIO */
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
    if(this.password.value!==this.cpassword.value){
      this.condicionContr="no"
      return;
    }
    let regRut = new RegExp("[0-9]+-[0-9kK]");
    if(!regRut.test(this.rut.value)){
      this.condicionRut="no"
      return;
    }
    this.Lista2.push(test);
      this.servicioCliente.Guardar(this.Lista2).subscribe(datos=>{
        
        //console.log("DATO RECIVIDO EN METODO POST"+ datos);
      });
      window.location.href="";
    
  }
  onChange(value:string){
     /*ESTO ES PARA CAMBIAR LAS COMUNAS DE ACUERDO A LA REGION */
    if (value==="arica"){
      this.comunas=["Arica","Camarones","Putre"];
    }
    if (value==="tarapaca"){
      this.comunas=["Alto Hospicio","Iquique","Colchane","Huara"];
    }
    if (value==="antofagasta"){
      this.comunas=["Calama","Tocopilla","Mejillones","María Elena","Taltal","Sierra Gorda"];
    }
    if (value==="atacama"){
      this.comunas=["Chañaral","Diego de Almagro","Copiapó","Tierra Amarilla","Freirina"];
    }
    if (value==="coquimbo"){
      this.comunas=["Canela","Illapel","Los Vilos","Salamanca","Andacollo","Coquimbo"];
    }
    if (value==="valparaiso"){
      this.comunas=["Valparaíso","Casablanca","Concón","Juan Fernandez"," Puchuncavi","Quintero","Viña del Mar"];
    }
    if (value==="santiago"){
      this.comunas=["Cerrillos","La Cisterna","La Florida","Lo Barnechea","Lo Espejo","Quilicura","Macul","Huechuraba","Lo Prado"];
    }
    if (value==="oHiggins"){
      this.comunas=["Codegua","Malloa","Rancagua","Rengo","Litueche","Pichilemu","Chimbarongo"];
    }
    if (value==="maule"){
      this.comunas=["Pelluhue","Curico","Hualane","Licanten"];
    }
    
    if (value==="nuble"){
      this.comunas=["Chillán","Bulnes","El Carmen"];
    }
    if (value==="biobio"){
      this.comunas=["Los Ángeles","Antuco","Cabrero"];
    }
    if (value==="araucania"){
      this.comunas=["Temuco","Padre Las Casas","Perquenco"];
    }
    if (value==="rios"){
      this.comunas=["Mariquina","Valdivia","La Unión"];
    }
    if (value==="lagos"){
      this.comunas=["Ancud","Castro","Chonchi"];
    }
    if (value==="aysen"){
      this.comunas=["Aysen","Chile Chico","Guaitecas"];
    }
    if (value==="magallanes"){
      this.comunas=["Laguna Blanca","Punta Arenas","Río Verde"];
    }
    if (value==="antartica"){
      this.comunas=["Cabo de Hornos","Antartica"];
    }
    
    //console.log("algun valor"+ value);
  }
  salir(){
    /*boton salir */
    window.location.href="";
  }
  

}

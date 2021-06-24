<?php
include("db.php");
/*Corresponde al POST */
header('Content-type: application/json');
header('Access-Control-Allow-Origin:*');

$json=file_get_contents('php://input');
$datos=json_decode($json);
 
  
//file_put_contents("usuarios.json", $json);
/*Simplemente coloca los datos en el archivo json que esta en la misma carpeta*/

if ($coneccion->connect_errno) {
    //echo "error" ;
    exit();
}
$rut=$datos[0]->rut;
$categoria=$datos[0]->categoria;
$prioridad=$datos[0]->prioridad;
$asunto=$datos[0]->asunto;
$descripcion=$datos[0]->descripcion;
$estado=$datos[0]->estado;
$respuesta=$datos[0]->respuesta;

$query = "INSERT INTO reclamo (rut,categoria,prioridad,asunto,descripcion,estado,respuesta) VALUES ('$rut','$categoria', '$prioridad', '$asunto','$descripcion','$estado','$respuesta')";

/*if ($coneccion->query($query) === TRUE) {
  echo "New record created successfully";
} else {
  //echo "Error: " . $sql . "<br>" . $conn->error;
}*/
if ($resultado=$coneccion->query($query)) {
 
}else{
  //echo null;
}
$coneccion->close();

?>
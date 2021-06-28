<?php
/*Este archivo es un POST ,se conecta al servicio admin-ed-reclamo
y modifica los datos de un reclamo en la base de datos*/
include("db.php");
/*Corresponde al POST */
header('Content-type: application/json');
header('Access-Control-Allow-Origin:*');

$json=file_get_contents('php://input');
$datos=json_decode($json);
 
  


if ($coneccion->connect_errno) {
    //echo "error" ;
    exit();
}
$id=$datos[0]->id;
$estado=$datos[0]->estado;
$respuesta=$datos[0]->respuesta;
$query="UPDATE reclamo SET estado='$estado', respuesta='$respuesta' WHERE id='$id'";

if ($coneccion->query($query) === TRUE) {
  //echo "New record created successfully";
} else {
  //echo "Error: " . $sql . "<br>" . $conn->error;
}

$coneccion->close();

?>
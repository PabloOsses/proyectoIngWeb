<?php
include("db.php");
/*Corresponde al POST */
header('Content-type: application/json');
header('Access-Control-Allow-Origin:*');

$json=file_get_contents('php://input');
$datos=json_decode($json);
 
  
//file_put_contents("usuarios.json", $json);
/*Simplemente coloca los datos en el archivo json que esta en la misma carpeta*/
/*
AHORA TODO DE LEE DESDE db.php

$host='localhost';
$user='root';
$pw='Barco24024qqq';
$db='prueba4';
$coneccion = new mysqli($host, $user, $pw, $db);*/
if ($coneccion->connect_errno) {
    //echo "error" ;
    exit();
}
$rut=$datos[0]->rut;
$nombre=$datos[0]->nombre;
$apellido=$datos[0]->apellido;
$residencia=$datos[0]->residencia;
$region=$datos[0]->region;
$comuna=$datos[0]->comuna;
$correo=$datos[0]->correo;
$password=$datos[0]->password;
$query = "INSERT INTO usuario VALUES ('$rut','$nombre', '$apellido', '$residencia','$region','$comuna','$correo',md5('$password'),'cliente')";
//$query = "INSERT INTO  usuarios VALUES ('Berta', 'euracia', 'bajada','eti','algo','@gmail','12345')";
if ($coneccion->query($query) === TRUE) {
  //echo "New record created successfully";
} else {
  //echo "Error: " . $sql . "<br>" . $conn->error;
}

$coneccion->close();

?>
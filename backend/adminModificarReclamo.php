<?php
/*Corresponde al POST */
header('Content-type: application/json');
header('Access-Control-Allow-Origin:*');

$json=file_get_contents('php://input');
$datos=json_decode($json);
 
  
//file_put_contents("usuarios.json", $json);
/*Simplemente coloca los datos en el archivo json que esta en la misma carpeta*/
$host='localhost';
$user='root';
$pw='Barco24024qqq';
$db='prueba4';
$coneccion = new mysqli($host, $user, $pw, $db);
if ($coneccion->connect_errno) {
    //echo "error" ;
    exit();
}
$id=$datos[0]->id;
$estado=$datos[0]->estado;
$respuesta=$datos[0]->respuesta;
$query="UPDATE reclamo SET estado='$estado', respuesta='$respuesta' WHERE id='$id'";
//$query = "INSERT INTO usuario VALUES ('$rut','$nombre', '$apellido', '$residencia','$region','$comuna','$correo','$password','cliente')";
//$query = "INSERT INTO  usuarios VALUES ('Berta', 'euracia', 'bajada','eti','algo','@gmail','12345')";
if ($coneccion->query($query) === TRUE) {
  //echo "New record created successfully";
} else {
  //echo "Error: " . $sql . "<br>" . $conn->error;
}

$coneccion->close();

?>
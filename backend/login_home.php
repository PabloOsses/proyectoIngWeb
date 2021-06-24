<?php
// NO UTLIZADO , IGNORAR
header('Content-type: application/json');
header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$json=file_get_contents('php://input');
//$datos=json_decode($json);
$params = json_decode($json);
//$correo=$datos[0]->correo;
//$nombre=$datos[0]->nombre;
$cheese=json_encode($params);
echo $json;

/*
$host='localhost';
$user='root';
$pw='Barco24024qqq';
$db='prueba4';
$coneccion = new mysqli($host, $user, $pw, $db);
if ($coneccion->connect_errno) {
    
    exit();
}
$correo=$datos[0]->correo;

$password=$datos[0]->password;
$query = "SELECT * FROM usuario where rut='$rut' and cpassword='$password'";
//$query = "INSERT INTO  usuario VALUES ('Berta', 'euracia', 'bajada','eti','algo','@gmail','12345')";
if ($coneccion->query($query) === TRUE) {
  //echo "New record created successfully";
} else {
  //echo "Error: " . $sql . "<br>" . $conn->error;
}

$coneccion->close();
*/
?>

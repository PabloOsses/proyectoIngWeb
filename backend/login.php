<?php
include("db.php");
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$json=file_get_contents('php://input');//HE AQUI EL PROBLEMA 

/* AHORA TODO DE LEE DESDE db.php
$host='localhost';
$user='root';
$pw='Barco24024qqq';
$db='prueba4';
$coneccion = new mysqli($host, $user, $pw, $db);
*/
/*echo $_GET["correo"];
echo $_GET["password"];
*/
$correo=$_GET["correo"];
$pass=$_GET["password"];
$query = "SELECT * FROM usuario where correo=$correo and cpassword=md5($pass)";

$i=0;
//echo $query;
if ($resultado=$coneccion->query($query)) {
    
    while($fila=$resultado->fetch_object()){
        $usuario=array(
            "rut"=>$fila->rut,
            "password"=>$fila->cpassword,
            "tipo"=>$fila->tipo
        );
        $datos[$i]=$usuario;
        $jsusuario=json_encode($usuario);
        echo $jsusuario;
        $i++;
    }
    /*$info=array(
        "code"=>200,
        "dato"=>$datos
    );
    $jsonrespuesta=json_encode($info);
    echo $jsonrespuesta;*/
} else {
    echo null;
}
/*
$usuario=array(
    "correo"=>$_GET["correo"],
    "password"=>$_GET["password"]
);
$jsonUsuario= json_encode($usuario);
//echo $jsonUsuario;
*/
$coneccion->close();
?>
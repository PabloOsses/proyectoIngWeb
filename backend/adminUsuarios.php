<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$json=file_get_contents('php://input');


$host='localhost';
$user='root';
$pw='Barco24024qqq';
$db='prueba4';
$coneccion = new mysqli($host, $user, $pw, $db);
$i=0;

$query = "SELECT * FROM usuario WHERE tipo !='administrador' ";
global $datos;
global $jsonrespuesta;
if ($resultado=$coneccion->query($query)) {
    while($fila=$resultado->fetch_object()){
        $usuario=array(
            "rut"=>$fila->rut,
            "nombre"=>$fila->nombre,
            "apellido"=>$fila->apellido,
            "residencia"=>$fila->residencia,
            "region"=>$fila->region,
            "comuna"=>$fila->comuna,
            "correo"=>$fila->correo,
        );
        $datos[$i]=$usuario;
        //$jsusuario=json_encode($usuario);
        //echo $jsusuario;
        $i++;
        //$jsonrespuesta=json_encode($datos);
        //echo $jsonrespuesta;
    }
    /*$info=array(
        "code"=>200,
        "dato"=>$datos
    );
    */
    $jsonrespuesta=json_encode($datos);
    echo $jsonrespuesta;
} else {
    echo null;
}
?>
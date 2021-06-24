<?php
include("db.php");
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$json=file_get_contents('php://input');//HE AQUI EL PROBLEMA 




/*echo $_GET["correo"];
echo $_GET["password"];
*/
$id=$_GET["id"];

$query = "SELECT * FROM reclamo where id=$id";

$i=0;
//echo $query;
if ($resultado=$coneccion->query($query)) {
    
    while($fila=$resultado->fetch_object()){
        $usuario=array(
            "id"=>$fila->id,
            "rut"=>$fila->rut,
            "asunto"=>$fila->asunto,
            "categoria"=>$fila->categoria,
            "descripcion"=>$fila->descripcion,
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
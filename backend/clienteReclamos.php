<?php
/*Este archivo es un GET ,se conecta al servicio reclamoscliente
y envia los datos de todos los reclamos de un usuario especifico 
al frontend*/
include("db.php");
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$json=file_get_contents('php://input');//SOLUCIONADO?



$i=0;
$rut=$_GET["rut"];
$query = "SELECT * FROM reclamo where rut=$rut ";
global $datos;
global $jsonrespuesta;
if ($resultado=$coneccion->query($query)) {
    while($fila=$resultado->fetch_object()){
        $usuario=array(
            "id"=>$fila->id,
            "rut"=>$fila->rut,
            "categoria"=>$fila->categoria,
            "prioridad"=>$fila->prioridad,
            "asunto"=>$fila->asunto,
            "descripcion"=>$fila->descripcion,
            "estado"=>$fila->estado,
            "respuesta"=>$fila->respuesta,
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
<?php
include 'conexion.php';
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$fecha_reserva = $_POST['fecha'];
$numero_personas = $_POST['personas'];

$consulta="INSERT INTO usuario (nombre, apellido, email, fecha_reserva, numero_personas)
VALUES ('$nombre', '$apellido ', '$email', '$fecha_reserva', '$numero_personas')";
$resultado=mysqli_query($conexion, $consulta);
if($resultado){
    echo "REGISTRO EXITOSO";
}else{
    echo "No se pudo registrar";
}
?>
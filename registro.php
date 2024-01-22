<?php
include 'conexion.php';
$nombre = $_POST['Nombre'];
$apellido = $_POST['Apellido'];
$email = $_POST['email'];
$fecha_reserva = $_POST['fecha'];
$numero_personas = $_POST['personas'];

$consulta="INSERT INTO usuario (nombre, apellido, email, fecha_reserva, numero_personas)
VALUES ('$nombre', '$apellido ', '$email', '$fecha_reserva', '$numero_personas')";
$resultado=mysqli_query($conexion, $consulta);
if($resultado){
    echo "REGISTRO EXITOSO"
}else{
    echo "No se pudo registrar"
}
?>
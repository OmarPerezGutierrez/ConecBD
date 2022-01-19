<?php
$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "ardui";

$conn = mysqli_connect("localhost", "root", "", "ardui");

if(mysqli_connect_errno()){
	echo 'Error, no se pudo conectar a la base de datos: '.mysqli_connect_error();
}   
?>


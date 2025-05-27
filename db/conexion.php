<?php
//Crea una clase "Conectar" para manejar la conexión a la base de datos.
class Conectar {
// Crea una función estática "conexion".
    public static function conexion() {
// Conecta a la base de datos usando mysqli, solicitando el host, usuario, password y nombre de la DB.
        $mysqli = new mysqli('localhost', 'root', '', 'tienda_motos');
// Un if para verificar que la conexión fue exitosa.
        if ($mysqli->connect_error) {
// Si hubo un error, muestra un mensaje.
            die('Error en la conexión: ' . $mysqli->connect_error);
        }
// return para devolver la conexion si fue exitosa.
        return $mysqli;
    }
}
?>
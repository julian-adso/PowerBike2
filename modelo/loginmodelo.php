<?php
require_once("../db/conexion.php");

class LoginModel {
    private $db;

    public function __construct() {
        $this->db = Conectar::conexion();
    }

    public function get_personas() {
        $sql = "SELECT * FROM usuarios";
        $resultado = $this->db->query($sql);
        return $resultado;
    }

    public function get_usuario($usuario, $password) {
        $stmt = $this->db->prepare("SELECT * FROM usuarios WHERE nombre_usuario = ? AND contrasena = ?");
        $stmt->bind_param("ss", $usuario, $password);
        $stmt->execute();
        $resultado = $stmt->get_result();
        $stmt->close();
        return $resultado;
    }

    public function verificar($usuario, $password) {
    // Hashear la contraseña ingresada
    $password_sha1 = sha1($password);

    // Buscar usuario en la tabla usuarios
    $stmt = $this->db->prepare("SELECT * FROM usuarios WHERE nombre_usuario = ? AND contrasena = ?");
    $stmt->bind_param("ss", $usuario, $password_sha1);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado && $resultado->num_rows > 0) {
        $row = $resultado->fetch_assoc();
        session_start();
        $_SESSION['usuario_id'] = $row['id'];
        $_SESSION['nombredeusuario'] = $row['nombre_usuario'];
        $_SESSION['numero_documento'] = $row['numero_documento'];

        // Redirigir al home de usuario
        header('Location: ../vista/catalogo/catalogo.php');
        exit();
    } else {
        echo "<script>alert('Usuario o contraseña incorrectos');window.location='../vista/login/login.php';</script>";
        exit();
    }
}

}
?>
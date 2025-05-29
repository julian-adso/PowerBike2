<?php
require_once("../modelo/loginmodelo.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = trim($_POST['username']);
    $password = trim($_POST['password']);

    // Validar que los campos no estén vacíos
    if (empty($usuario) || empty($password)) {
        echo "<script>alert('Por favor, complete todos los campos');window.location='../vista/login/login.php';</script>";
        exit();
    }

    // Crear una instancia del modelo
    $loginModel = new LoginModel();

    // Verificar las credenciales
    $loginModel->verificar($usuario, $password);
} else {
    // Si no es una solicitud POST, redirigir al login
    header('Location: ../vista/login/login.php');
    exit();
}
?>
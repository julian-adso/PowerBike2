<?php
require_once("../modelo/crearmodelo.php");

class clientecontrolador{
    private $cliente;
    public function __construct()
    {
        $this->cliente = new Cliente();
        $this->acciones();
    }

    public function guardar()
    {
        if (isset($_POST['nombre']) && isset($_POST['correo']) && isset($_POST['password'])) {
            $nombre = $_POST['nombre'];
            $correo = $_POST['correo'];
            $password = $_POST['password'];

        
    
            try {
                $this->cliente->guardar($nombre, $correo, $password);
                header("Location: ../vista/login/login.php");
            } catch (Exception $e) {
                die("Error al guardar el usuario: " . $e->getMessage());
            }
        } else {
            die("Error: Todos los campos son obligatorios.");
        }
    }
    public function acciones()
    {
        if (isset($_POST['guardar'])) {
            $this->guardar();
        } else {
            header("Location: ../vista/login/login.php");
        }
    }
}
new clientecontrolador();
?>
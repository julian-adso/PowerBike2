<?php
require_once("../../db/conexion.php");

class CarritoModelo {
    private $db;

    public function __construct() {
        $this->db = Conectar::conexion();
    }

    public function agregarProducto($usuario_id, $producto_id, $cantidad, $precio) {
        $stmt = $this->db->prepare("INSERT INTO carrito (usuario_id, producto_id, cantidad, fecha_agregado, precio) VALUES (?, ?, ?, NOW(), ?)");
        $stmt->bind_param("iiid", $usuario_id, $producto_id, $cantidad, $precio);
        $result = $stmt->execute();
        $stmt->close();
        return $result;
    }
}
?>
<?php
session_start();
require_once("../modelo/carritomodelo.php");

header('Content-Type: application/json');

if (!isset($_SESSION['usuario_id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Usuario no autenticado']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$producto_id = $data['producto_id'];
$cantidad = $data['cantidad'];
$precio = $data['precio'];
$usuario_id = $_SESSION['usuario_id'];

$modelo = new CarritoModelo();
$ok = $modelo->agregarProducto($usuario_id, $producto_id, $cantidad, $precio);

if ($ok) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al agregar al carrito']);
}
?>
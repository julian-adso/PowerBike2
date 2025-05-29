<?php
require_once("../db/conexion.php");

class Cliente {
    private $db;

    public function __construct() {
        $this->db = Conectar::conexion();
    }

    public function guardar($nombre, $correo, $password) {
        // Hashear la contraseña antes de guardarla
        $password = sha1($password);

        // Iniciar una transacción
        $this->db->begin_transaction();

        try {
            echo "Ejecutando consulta para paciente...";
            // Segunda consulta: Insertar en la tabla paciente
            $sqlPaciente = "INSERT INTO usuarios (nombre, correo, password) VALUES (?, ?, ?)";
            $stmtPaciente = $this->db->prepare($sqlPaciente);

            if ($stmtPaciente === false) {
                throw new Exception("Error en la preparación de la consulta para paciente: " . $this->db->error);
            }

            $stmtPaciente->bind_param("sss", $nombre, $correo, $password);

            if (!$stmtPaciente->execute()) {
                throw new Exception("Error al guardar en la tabla paciente: " . $stmtPaciente->error);
            }

            // Confirmar la transacción
            $this->db->commit();

            echo "Usuario guardado correctamente.";
        } catch (Exception $e) {
            // Revertir la transacción en caso de error
            $this->db->rollback();
            die("Error al guardar el usuario: " . $e->getMessage());
        } finally {
            // Cerrar los statements
            if (isset($stmtPaciente)) {
                $stmtPaciente->close();
            }
            if (isset($stmtLogin)) {
                $stmtLogin->close();
            }
        }
    }
}
?>
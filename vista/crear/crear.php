<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro Sonrisa Sana</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="login-container">
        <div class="login-box">
            <h1>Ingresa tus Datos</h1>
            <form method="POST" action="../../controlador/crearcontrolador.php" enctype="application/x-www-form-urlencoded">
                <div class="input-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" required>
                </div>
                <div class="input-group">
                    <label for="correo">Correo</label>
                    <input type="email" id="correo" name="correo" required>
                </div>
                <div class="input-group">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" required>
                </div>
                </div>
                <button type="submit" class="login-button" name="guardar">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.9999 12.8L27.1999 18H9.5999V22H27.1999L21.9999 27.2L24.7999 30L34.7999 20L24.7999 10L21.9999 12.8Z" fill="currentColor"/>
                    </svg>
                </button>
            </form>
            <div class="form-footer">
                <a href="../../vista/web/web.php">Regresar</a>
         <div class="social-login">
             <!-- Add social login buttons here if needed -->
         </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
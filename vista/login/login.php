<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acceso PowerBike</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="login-container">
        <div class="login-header">
            <img src="logo.jpeg" alt="MotoAccesorios Logo" whiled="100" height="100">
            <h1>PowerBike</h1>
            <p>Tu aventura comienza aquí</p>
        </div>
        <form id="loginForm">
            <div class="input-group">
                <label for="username">Usuario o Email</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="input-group">
                <label for="password">Contraseña</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit" class="login-button">Ingresar</button>
            <div class="form-footer">
                <a href="#">¿Olvidaste tu contraseña?</a>
                <span>|</span>
                <a href="#">Crear cuenta</a>
            </div>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>
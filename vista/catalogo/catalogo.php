<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo - MotoAccesorios</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>
    <nav class="main-nav">
        <ul>
            <li><div class="header-flex">
                <img src="logo.jpeg" alt="MotoAccesorios Logo" height="100" width="125">
                <div class="header-titles">
                <h1>PowerBike</h1>
                <p>Equípate para la Aventura</p>
                </div>
                </div>
            </li>
            <li><a href="#" class="nav-link active" data-category="Todos">Todos</a></li>
            <li><a href="#" class="nav-link" data-category="Cascos">Cascos</a></li>
            <li><a href="#" class="nav-link" data-category="Indumentaria">Indumentaria</a></li>
            <li><a href="#" class="nav-link" data-category="Protecciones">Protecciones</a></li>
            <li><a href="#" class="nav-link" data-category="Accesorios">Accesorios</a></li>
            <li><a href="#" class="nav-link" data-category="Moto">Moto</a></li>
            <li><a href="#"><img src="carrito.jpg" alt="Carrito de Compras" height="20" width="20"><span class="cart-count">0</span></a></li>
            <li><div class="user-actions" align="right">
                    <a href="../../modelo/logout.php">
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828490.png" alt="Logout Icon" class="logout-icon" width="20" height="20">
                    </a>
                </div></li>
        </ul>
    </nav>

    <main class="product-catalog-container">
        <div id="productGrid" class="product-grid">
            <!-- Productos se cargarán aquí por JavaScript -->
        </div>
    </main>
    
    <footer class="site-footer-bar">
        <p>&copy; 2024 MotoAccesorios. Todos los derechos reservados.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
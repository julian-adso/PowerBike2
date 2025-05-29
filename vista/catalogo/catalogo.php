<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo - MotoAccesorios</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>
    <header class="site-header">
        <img src="logo.jpeg" alt="MotoAccesorios Logo" height="100" width="125">
        <h1>PowerBike</h1>
        <p>Equípate para la Aventura</p>
    </header>

    <nav class="main-nav">
        <ul>
            <li><a href="#" class="nav-link active" data-category="Todos">Todos</a></li>
            <li><a href="#" class="nav-link" data-category="Cascos">Cascos</a></li>
            <li><a href="#" class="nav-link" data-category="Indumentaria">Indumentaria</a></li>
            <li><a href="#" class="nav-link" data-category="Protecciones">Protecciones</a></li>
            <li><a href="#" class="nav-link" data-category="Accesorios">Accesorios</a></li>
            <li><a href="#" class="nav-link" data-category="Moto">Moto</a></li>
            <li><img src="carrito.jpg" alt="Carrito de Compras" height="40" width="40"><span class="cart-count">0</span></li>
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
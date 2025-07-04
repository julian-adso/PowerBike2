<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PowerBike - Tu Tienda de Accesorios para Motos</title>
    <link rel="stylesheet" href="style.css">
    <script type="importmap">
    {
        "imports": {
        }
    }
    </script>
</head>

<body>
    <header>
        <div class="container">
            <a href="#" class="logo-link">
                <img src="logo.jpeg" alt="MotoAccesorios Logo" class="logo-img">
                <span class="logo-text">PowerBike</span>
            </a>
            <nav>
                <ul>
                    <li><a href="#hero">Inicio</a></li>
                    <li><a href="#featured-products">Productos</a></li>
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#footer">Contacto</a></li>
                    <li><a href="../login/login.php">Iniciar Sesión</a></li>
                </ul>
            </nav>
        </div>
    </header>

  <section class="hero" id="hero">
    <div class="hero-content">
        <h1>Equipa Tu Aventura</h1>
        <p>Lo mejor para tu moto en un solo lugar</p>
        <a href="#" class="btn btn-primary">Ver Ofertas</a>
    </div>
</section>

    <section class="featured-products"  id="featured-products">
        <div class="container">
            <h2>accesorio para tu moto</h2>
            <div class="carousel">
            <button class="carousel-btn prev">&#10094;</button>
            <div class="carousel-track">
                <div class="carousel-item">
                    <img src="espejos.jpg" alt="Accesorio 1" height="200" width="300">
                    <p>Espejos Retrovisor</p>
                </div>
                <div class="carousel-item">
                    <img src="mangos.jpg" alt="Accesorio 2" height="200" width="300">
                    <p>Mangos</p>
                </div>
                <div class="carousel-item">
                    <img src="exploradoras.jpg" alt="Accesorio 3" height="200" width="300">
                    <p>Exploradoras</p>
                </div>
            </div>
            <button class="carousel-btn next">&#10095;</button>
        </div>
        </div>
    </section>
<script>
    // Carrusel simple en JS
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let index = 0;

function showItem(idx) {
    track.style.transform = `translateX(-${idx * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    index = (index === 0) ? items.length - 1 : index - 1;
    showItem(index);
});
nextBtn.addEventListener('click', () => {
    index = (index === items.length - 1) ? 0 : index + 1;
    showItem(index);
});
showItem(index);

// Carrusel automático
setInterval(() => {
    index = (index === items.length - 1) ? 0 : index + 1;
    showItem(index);
}, 3000); // Cambia cada 3 segundos
</script>
<style>
.carousel {
    position: relative;
    width: 320px;
    margin: 0 auto;
    overflow: hidden;
}
.carousel-track {
    display: flex;
    transition: transform 0.5s;
    width: 100%;
}
.carousel-item {
    min-width: 320px;
    box-sizing: border-box;
    text-align: center;
}
.carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #fff;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    z-index: 1;
    padding: 0 10px;
    opacity: 0.7;
}
.carousel-btn.prev { left: 0; }
.carousel-btn.next { right: 0; }
</style>

    <section class="hero" id="about">
        <div class="hero-content">
            <h1>Nosotros</h1>
            <p>Somos PowerBike, tu tienda de accesorios para motos. Ofrecemos una amplia gama de productos de alta calidad para que disfrutes al máximo de tu pasión por las motos.</p>
            <p>Desde cascos y guantes hasta chaquetas y accesorios personalizados, tenemos todo lo que necesitas para equipar tu moto y garantizar tu seguridad en la carretera.</p>
            <p>Con años de experiencia en el sector, nuestro equipo está comprometido a brindarte el mejor servicio y asesoramiento para que encuentres los productos perfectos para ti y tu moto.</p>
            <p>¡Lo mejor para tu moto en un solo lugar!</p>
        </div>
    </section>

    <footer class="bg-light py-4" id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5>Redes Sociales</h5>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <img src="facebook.jpg" width="50">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <img src="twitter.png" width="50">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <img src="instagram.png" width="50">
                </div>
                <div class="col-md-4">
                    <h5>Contacto</h5>
                    <p>Dirección: Calle Falsa 123 | Teléfono: 123-456-7890 | Email: info@tiendamascotas.com</p>
                </div>
                <div class="col-md-4">
                    <h5>Horario de Atención</h5>
                    <p>Lunes a Viernes: 9:00 AM - 6:00 PM | Sábados: 10:00 AM - 2:00 PM</p>
                </div>
            </div>
        </div>
    </footer>

    <script src="script.js" type="module"></script>
</body>
</html>

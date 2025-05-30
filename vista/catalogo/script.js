document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');
    const navLinks = document.querySelectorAll('.main-nav .nav-link');
    const cartIcon = document.querySelector('.cart-count');

    // Crear el div del carrito si no existe
    let cartDiv = document.getElementById('cartDiv');
    if (!cartDiv) {
        cartDiv = document.createElement('div');
        cartDiv.id = 'cartDiv';
        cartDiv.style.display = 'none';
        cartDiv.style.position = 'fixed';
        cartDiv.style.top = '80px';
        cartDiv.style.right = '20px';
        cartDiv.style.background = '#fff';
        cartDiv.style.border = '1px solid #ccc';
        cartDiv.style.padding = '20px';
        cartDiv.style.zIndex = '1000';
        cartDiv.style.width = '300px';
        cartDiv.style.maxHeight = '400px';
        cartDiv.style.overflowY = 'auto';
        cartDiv.innerHTML = `<h3>Carrito de Compras</h3><div class="cart-items"></div><button id="closeCartBtn">Cerrar</button>`;
        document.body.appendChild(cartDiv);
    }

    let cart = [];

    const products = [
        {
            id: 1,
            name: "Casco Integral ProTek V2",
            category: "Cascos",
            price: "$650.000",
            imageUrl: "product_helmet_generic.png",
            description: "Casco integral de alta gama con certificación ECE 22.06, visor solar integrado y sistema de ventilación avanzado."
        },
        {
            id: 2,
            name: "Chaqueta Touring Defender",
            category: "Indumentaria",
            price: "$750.00",
            imageUrl: "product_jacket_generic.png",
            description: "Chaqueta textil tricapa para todas las estaciones, impermeable y transpirable, con protecciones CE nivel 2."
        },
        {
            id: 3,
            name: "Guantes Racing PielFlex",
            category: "Protecciones",
            price: "$120.000",
            imageUrl: "product_gloves_generic.png",
            description: "Guantes deportivos de piel de canguro con protecciones de carbono en nudillos y deslizaderas en palma."
        },
        {
            id: 4,
            name: "Bolsa Sobredepósito Adventure",
            category: "Accesorios",
            price: "$350.000",
            imageUrl: "product_accessory_generic.png",
            description: "Bolsa sobredepósito expandible de 15-22L, con sistema de fijación rápida TankLock y funda impermeable."
        },
        {
            id: 5,
            name: "Rodilleras Articuladas EnduroMax",
            category: "Protecciones",
            price: "$440.000",
            imageUrl: "product_protection_generic.png",
            description: "Rodilleras articuladas ligeras y resistentes, ideales para off-road, con triple cierre de velcro."
        },
        {
            id: 6,
            name: "Casco Modular Urban Rider",
            category: "Cascos",
            price: "$721.000",
            imageUrl: "casco.jpg", // Re-use or use a different helmet image if available
            description: "Casco modular versátil para uso urbano y touring, con pinlock ready y gafas solares internas."
        },
        {
            id: 7,
            name: "Pantalón Vaquero Moto Kevlar",
            category: "Indumentaria",
            price: "$600.000",
            imageUrl: "product_jacket_generic.png", // Placeholder, ideally specific pant image
            description: "Pantalones vaqueros con refuerzos de Kevlar en zonas críticas y protecciones de rodilla extraíbles."
        },
        {
            id: 8,
            name: "Juego de Exploradoras LED",
            category: "Moto",
            price: "$150.000",
            imageUrl: "exploradoras.jpg", // Placeholder, ideally specific tool kit image
            description: "Explorados Led Denali D2 V2.0 con 2.160 lúmenes, óptica de proyección avanzada y carcasa resistente al agua."
        },
        {
            id: 9,
            name: "Shaft 582 EVO",
            category: "Cascos",
            price: "$650.000",
            imageUrl: "shaft.jpg", // Placeholder, ideally specific tool kit image
            description: "Un casco integral EVO diseñado para ofrecerte la mejor protección sin sacrificar el estilo."
        },
        {
            id: 10,
            name: "SHAFT 582 EVO SOLID GR",
            category: "Cascos",
            price: "$450.000",
            imageUrl: "shaft2.jpg", // Placeholder, ideally specific tool kit image
            description: "Fabricado con materiales de alta calidad, tanto en su interior como en su exterior, el casco está diseñado para ofrecer una experiencia de conducción cómoda y segura."
        },
        {
            id: 11,
            name: "SHAFT PRO 610 EVO",
            category: "Cascos",
            price: "$370.000",
            imageUrl: "shaft3.jpg", // Placeholder, ideally specific tool kit image
            description: "Redefine la protección en dos ruedas, combinando diseño innovador, tecnología avanzada y certificación ECE para brindarte la máxima seguridad en cada viaje."
        },
        {
            id: 12,
            name: "SHAFT PRO 612 EVO FUNNY",
            category: "Cascos",
            price: "$340.000",
            imageUrl: "shaftm.jpg", // Placeholder, ideally specific tool kit image
            description: "combina máxima seguridad, diseño moderno y comodidad superior para los motociclistas que desean protección sin renunciar al estilo."
        },
        {
            id: 13,
            name: "SCORPION EXO R1 EVO II",
            category: "Cascos",
            price: "$1.400.000",
            imageUrl: "scorpion.jpg", // Placeholder, ideally specific tool kit image
            description: "Con su calota superligera TCT Ultra, este casco de fibra de carbono optimiza la aerodinámica y la protección, destacando en MotoGP y WSBK. Su sistema de ventilación avanzado con entradas de aire ajustables y rejillas de escape garantiza el fluir del aire, manteniendo al piloto fresco durante largas carreras."
        },
        {
            id: 14,
            name: "SCORPION EXO COMBAT II NM",
            category: "Cascos",
            price: "$1.000.000",
            imageUrl: "scorpion2.jpg", // Placeholder, ideally specific tool kit image
            description: "es la elección perfecta para los motociclistas urbanos que buscan un equilibrio entre estilo y funcionalidad. Con un acabado mate que resalta su diseño moderno, este casco multi-modular se adapta a diversas situaciones de conducción, brindando versatilidad y comodidad en cada viaje."
        },
        {
            id: 15,
            name: "KYT R2R MAX FOGGIA MUGELLO 2022",
            category: "Cascos",
            price: "$1.300.000",
            imageUrl: "kyt.jpg", // Placeholder, ideally specific tool kit image
            description: "el casco integral KYT, sus formas cautivadoras y extremas han sido estudiadas en el túnel de viento, para conseguir las mejores prestaciones sin dejar de lado el estilo y la ergonomía."
        },
        {
            id: 16,
            name: "KYT R2R MAX ASSAULT",
            category: "Cascos",
            price: "$900.000",
            imageUrl: "kyt2.jpg", // Placeholder, ideally specific tool kit image
            description: "combina tecnología avanzada, diseño aerodinámico y comodidad superior, ideal para quienes viven la carretera."
        },
        {
            id: 17,
            name: "LS2 FF811 STYLUS",
            category: "Cascos",
            price: "$1.500.000",
            imageUrl: "ls2.jpg", // Placeholder, ideally specific tool kit image
            description: "combina seguridad, estilo y confort premium para los amantes de la velocidad. Con certificación ECE 22-06, su calota de fibra de vidrio HPFC ofrece máxima resistencia y ligereza, ideal para un diseño Sport Touring."
        },
        {
            id: 18,
            name: "HAFT PRO 620C EVO",
            category: "Cascos",
            price: "$1.100.000",
            imageUrl: "shaftpro.jpg", // Placeholder, ideally specific tool kit image
            description: "Su coraza en fibra de carbono lo hace ultraligero, mientras que la certificación ECE R22-06 garantiza la máxima protección. Gracias a su tecnología Glow in the Dark, brilla en la oscuridad para una mayor visibilidad en cada trayecto."
        },
        {
            id: 19,
            name: "Monotraje SPYKE Aragon Race",
            category: "Indumentaria",
            price: "$3.100.000",
            imageUrl: "mono1.webp", // Placeholder, ideally specific tool kit image
            description: "Para los que van a competir, Piel de canguro para máxima resistencia y comodidad. Protectores con certificación CE, deslizadores agresivos y bolsillo para bolsa de camellos."
        },
        {
            id: 20,
            name: "Monotraje SPYKE Estoril Race",
            category: "Indumentaria",
            price: "$2.700.000",
            imageUrl: "mono2.webp", // Placeholder, ideally specific tool kit image
            description: "Cuero de búfalo de primera calidad Tejido elástico para un ajuste agradable Paneles de cuero perforado en el pecho, la espalda, las mangas y los muslos para una mejor ventilación del aire. Joroba trasera de carreras para mejorar el rendimiento aerodinámico."
        },
        {
            id: 21,
            name: "Monotraje SPYKE Assen Race",
            category: "Indumentaria",
            price: "$2.450.000",
            imageUrl: "mono3.webp", // Placeholder, ideally specific tool kit image
            description: "Construcción de capa exterior de piel de bobina de primera calidad, Tejido elástico para un ajuste agradable, Paneles de cuero perforado en el pecho, la espalda, las mangas y los muslos para una mejor ventilación del aire, Joroba trasera de carreras para mejorar el rendimiento aerodinámico. Neopreno en el cuello para absorber el sudor, Para aumentar la libertad de movimientos en acordeón en codo, rodilla y espalda, Mangas con forma de carreras, Acolchados laterales antishock."
        },
        {
            id: 22,
            name: "MONOTRAJE ALPINESTARS GP FORCE CHASER LEATHER",
            category: "Indumentaria",
            price: "$2.650.000",
            imageUrl: "mono4.png", // Placeholder, ideally specific tool kit image
            description: "El traje de cuero GP Force Chaser está fabricado con cuero bovino para ofrecer una resistencia insuperable a la abrasión y los desgarros. Completamente optimizado para su uso con o sin Tech-Air5®, el sistema de seguridad de airbag electrónico líder mundial de Alpinestars, el traje de cuero GP Force Chaser incorpora protectores GP de Alpinestars para una protección eficaz contra impactos y deslizadores externos en las articulaciones para una resistencia a la abrasión sin igual."
        },
        {
            id: 23,
            name: "MONOTRAJE MACNA TRACKTIX 120",
            category: "Indumentaria",
            price: "$2.500.000",
            imageUrl: "mono5.webp", // Placeholder, ideally specific tool kit image
            description: "está fabricado con cuero bovino para ofrecer una resistencia insuperable a la abrasión y los desgarros, Completamente optimizado para su uso con o sin Tech-Air5®, el sistema de seguridad de airbag electrónico líder mundial de Alpinestars, el traje de cuero GP Force Chaser incorpora protectores GP de Alpinestars para una protección eficaz contra impactos y deslizadores externos en las articulaciones para una resistencia a la abrasión sin igual."
        },
        {
            id: 24,
            name: "Chaqueta Carrera Blue - Chaqueta Antifricción de Moto, Impermeable Sequoia Speed",
            category: "Indumentaria",
            price: "$200.000",
            imageUrl: "cha.jpg", // Placeholder, ideally specific tool kit image
            description: "Máxima velocidad, máxima protección y máxima ventilación es lo que Sequoia Speed® ha combinado en la creación de esta ultra ligera y vistosa modelo de chaqueta tipo Sport Racing para los amantes de las altas velocidades."
        },
        {
            id: 25,
            name: "Chaqueta Impermeable con Protecciones Removibles Certificadas Unisex",
            category: "Indumentaria",
            price: "$220.000",
            imageUrl: "cha2.jpg", // Placeholder, ideally specific tool kit image
            description: "Cortaviento Impermeable Con Protecciones."
        },
        {
            id: 26,
            name: "Pantalón GAS LADIES - Pantalón de Protección Impermeable con Protectores Certificados Removibles",
            category: "Indumentaria",
            price: "$270.000",
            imageUrl: "pan.jpg", // Placeholder, ideally specific tool kit image
            description: "Esta es la premisa de los pantalones Sequoia Speed® tipo Racing, para los más exigentes usuarios. El complemento perfecto para tu chaqueta, tus guantes y botas de competencia del más alto nivel."
        },
        {
            id: 27,
            name: "Pantalón GAS GREEN, Protección Rodillas Certificadas Removibles, Impermeable",
            category: "Indumentaria",
            price: "$290.000",
            imageUrl: "pan2.jpg", // Placeholder, ideally specific tool kit image
            description: "Una cabalgada clásica y elegante que una caballero de hierro como tú siempre soñó tomar… Fabricado especialmente para moteros decididos a dejar una huella a su paso, confeccionado y diseñado a conciencia para brindarte la comodidad y seguridad que usted amerite."
        },
        {
            id: 28,
            name: "Impermeable tipo Sudadera Liviano Plegable",
            category: "Indumentaria",
            price: "$290.000",
            imageUrl: "imper.jpg", // Placeholder, ideally specific tool kit image
            description: "No te expongas a la lluvia ni al frío al conducir tu moto en condiciones extremas usando este espectacular y ultra durable  impermeable en sudadera 100% resistente al agua."
        },
        {
            id: 29,
            name: "Rodilleras Metálicas Dimo para Moto Bicicleta Bmx Bicicross",
            category: "Protecciones",
            price: "$150.000",
            imageUrl: "rodi.jpg", // Placeholder, ideally specific tool kit image
            description: "Kit de rodilleras y coderas (4 piezas) fabricadas en materiales de primera calidad para proporcionar la seguridad necesaria mientras conduces tu moto o practicas algún deporte extremo, vienen con refuerzo en placa de acero para darle un toque único en el diseño."
        },
        {
            id: 30,
            name: "Botas de Caucho Impermeables Dakar Negra Moto, Motociclismo",
            category: "Protecciones",
            price: "$60.000",
            imageUrl: "bota.jpg", // Placeholder, ideally specific tool kit image
            description: "Ante la lluvia no hay mejor opción que contar con unas botas Dakar, las cuales son fabricadas en PVC y garantizan 100% de impermeabilidad. Ideales para motociclistas y un precio accesible."
        },
        {
            id: 31,
            name: "Pijama Mesh o Carpa impermeable para moto con maletero",
            category: "Accesorios",
            price: "$120.000",
            imageUrl: "carpa.jpg", // Placeholder, ideally specific tool kit image
            description: "Protege tu moto con la pijama Mesh, hecha en PVC transpirable que evita la humedad y el deterioro. Cubre completamente y resiste sol, lluvia y polvo. Tiene uniones termoselladas, línea reflectiva para mayor visibilidad y aro metálico para asegurar con candado. Ideal para motos con maletero que duermen al aire libre."
        },
        {
            id: 32,
            name: "Candado Freno De Disco Con Alarma Para Moto",
            category: "Accesorios",
            price: "$50.000",
            imageUrl: "candado.jpg", // Placeholder, ideally specific tool kit image
            description: "Con el candado de freno de disco con alarma, evita el robo de tu moto, no le dejes el trabajo mas fácil a los amigos de lo ajeno. Bloquea la llanta de tu moto a través de un candado en el disco de tu moto. Así evitarás que ruede. Además cuenta con una fuerte alarma que se dispara con el movimiento."
        },
        {
            id: 33,
            name: "Soporte Porta Celular Moto o bicicleta",
            category: "Accesorios",
            price: "$30.000",
            imageUrl: "cel.jpg", // Placeholder, ideally specific tool kit image
            description: "Estuche Soporte giratorio 360 grados, para espejo de su moto, Pantalla frontal transparente proporciona visualización fácil y suave de la pantalla táctil de acceso."
        },
        {
            id: 34,
            name: "Intercomunicador Bluetooth Tcom FX Pro con IA",
            category: "Moto",
            price: "$200.000",
            imageUrl: "inter.jpg", // Placeholder, ideally specific tool kit image
            description: "Con el intercomunicador bluetooth para casco de moto FX-PRO por fín podrás hablar con tu pareja o amigos mientras escuchan su música favorita."
        },
        {
            id: 35,
            name: "PUNTERA EXOSTO D124 TORNASOL ACERO",
            category: "Moto",
            price: "$400.000",
            imageUrl: "pipeta.png", // Placeholder, ideally specific tool kit image
            description: "PUNTERA EXOSTO D124 TORNASOL ACERO."
        },
        {
            id: 36,
            name: "Pato De Goma Para Moto o Bicicleta Con Luz",
            category: "Moto",
            price: "$400.000",
            imageUrl: "patito.webp", // Placeholder, ideally specific tool kit image
            description: "Viaja donde quieras en compañía de un fiel amigo, puedes comprar aquí un pato amarillo con casco, cadena, metralleta, luz interna, hélice, gafas de sol."
        }
    ];

    function renderProducts(filterCategory = "Todos") {
        productGrid.innerHTML = '';

        const filteredProducts = filterCategory === "Todos"
            ? products
            : products.filter(product => product.category === filterCategory);

        if (filteredProducts.length === 0) {
            productGrid.innerHTML = `<p class="no-products-message" style="color: #ccc; text-align: center; grid-column: 1 / -1;">No hay productos en esta categoría.</p>`;
            return;
        }

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image-container">
                    <img src="${product.imageUrl}" alt="${product.name}">
                </div>
                <h3 >${product.name}</h3>
                <p class="category">${product.category}</p>
                <p class="description">${product.description}</p>
                <p class="price">${product.price}</p>
                <button class="details-button" data-id="${product.id}">Agregar al Carrito</button>
            `;
            productGrid.appendChild(card);
        });

        // Agregar eventos a los botones de agregar al carrito
        document.querySelectorAll('.details-button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(btn.getAttribute('data-id'));
                const product = products.find(p => p.id === id);
                addToCart(product);
            });
        });
    }

    function addToCart(product) {
    // Si ya está en el carrito, solo suma cantidad
    const found = cart.find(item => item.id === product.id);
    if (found) {
        found.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCartCount();
    renderCart();

    // --- Agregar a la base de datos usando MVC ---
    let precioLimpio = parseFloat(product.price.replace(/[^\d,]/g, '').replace(/\./g, '').replace(',', '.'));

    fetch('../../controlador/carritocontrolador.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            producto_id: product.id,
            cantidad: 1,
            precio: precioLimpio
        })
    })
    .then(res => res.json())
    .then(data => {
        if (!data.success) {
            alert('No se pudo agregar a la base de datos');
        }
    })
    .catch(() => {
        alert('Error de conexión al agregar al carrito');
    });
}

    function updateCartCount() {
        cartIcon.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    }

    function renderCart() {
    const cartItemsDiv = cartDiv.querySelector('.cart-items');
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p style="color:#888;">El carrito está vacío.</p>';
    } else {
        cartItemsDiv.innerHTML = cart.map((item, idx) => `
            <div style="border-bottom:1px solid #eee; margin-bottom:8px; padding-bottom:8px;">
                <strong>${item.name}</strong><br>
                <span>${item.price}</span> <br>
                <span>Cantidad: ${item.qty}</span><br>
                <button class="remove-btn" data-idx="${idx}">Eliminar</button>
            </div>
        `).join('');
        // Botón de finalizar compra
        cartItemsDiv.innerHTML += `
            <button id="finishPurchaseBtn" style="margin-top:12px; background:#ff9800; color:#222; border:none; border-radius:5px; padding:8px 18px; font-weight:bold; cursor:pointer;">Culminar Compra</button>
        `;
        // Evento para eliminar productos
        cartItemsDiv.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(btn.getAttribute('data-idx'));
                cart.splice(idx, 1);
                updateCartCount();
                renderCart();
            });
        });
        // Evento para finalizar compra
        cartItemsDiv.querySelector('#finishPurchaseBtn').addEventListener('click', () => {
            alert('¡Gracias por tu compra! (Aquí puedes redirigir o limpiar el carrito)');
            cart = [];
            updateCartCount();
            renderCart();
            cartDiv.style.display = 'none';
        });
    }
}

    // Mostrar/ocultar carrito al hacer click en el icono
    cartIcon.parentElement.addEventListener('click', () => {
        cartDiv.style.display = cartDiv.style.display === 'none' ? 'block' : 'none';
        renderCart();
    });

    // Botón para cerrar el carrito
    cartDiv.querySelector('#closeCartBtn').addEventListener('click', () => {
        cartDiv.style.display = 'none';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
            const category = link.getAttribute('data-category');
            renderProducts(category);
        });
    });

    // Render inicial
    renderProducts();
    updateCartCount();
});

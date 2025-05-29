document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');
    const navLinks = document.querySelectorAll('.main-nav .nav-link');

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
        }
    ];

    function renderProducts(filterCategory = "Todos") {
        productGrid.innerHTML = ''; // Clear existing products

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
                <h3>${product.name}</h3>
                <p class="category">${product.category}</p>
                <p class="description">${product.description}</p>
                <p class="price">${product.price}</p>
                <button class="details-button">Ver Detalles</button>
            `;
            productGrid.appendChild(card);
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            // Update active class
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
            
            const category = link.getAttribute('data-category');
            renderProducts(category);
        });
    });

    // Initial render of all products
    renderProducts();
});
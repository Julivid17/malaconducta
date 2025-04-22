// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Funcionalidad para los botones "Agregar al carrito"
document.querySelectorAll('.product-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const productTitle = this.closest('.product-info').querySelector('.product-title').textContent;
        alert(`¡${productTitle} agregado al carrito!`);
    });
});

// Validación simple del formulario
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
        this.reset();
    } else {
        alert('Por favor completa todos los campos del formulario.');
    }
});
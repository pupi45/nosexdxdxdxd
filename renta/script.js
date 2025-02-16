// Puedes agregar interactividad aquí, como animaciones o validaciones de formulario.
document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de animación al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#222';
        } else {
            header.style.backgroundColor = '#333';
        }
    });
});
//animaciones aqui para arriba 

//esta parte sirve para enviar mensajes al correo

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    const formData = new FormData(this);
    const responseMessage = document.getElementById('responseMessage');

    fetch('https://formspree.io/f/manqpwda', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            responseMessage.textContent = "¡Gracias por contactarnos! Tu mensaje ha sido enviado.";
            responseMessage.style.color = "green";
            document.getElementById('contactForm').reset(); // Limpiar el formulario
        } else {
            responseMessage.textContent = "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.";
            responseMessage.style.color = "red";
        }
    })
    .catch(error => {
        responseMessage.textContent = "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.";
        responseMessage.style.color = "red";
    });
});
//aqui cierra el mensaje de correo

//aqui empieza el codigo para el carrusel de imagenes

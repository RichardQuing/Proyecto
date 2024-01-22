document.addEventListener('DOMContentLoaded', function () {
    
    const contenedorHamburgesa = document.getElementById('hamburguesa');
    const hamburguesa = document.createElement('button');
    
    hamburguesa.className = 'navbar-toggler';
    hamburguesa.type = 'button';
    hamburguesa.setAttribute('data-bs-toggle', 'collapse');
    hamburguesa.setAttribute('data-bs-target', '#navbarColor02');
    hamburguesa.setAttribute('aria-controls', 'navbarColor02');
    hamburguesa.setAttribute('aria-expanded', 'false');
    hamburguesa.setAttribute('aria-label', 'Toggle navigation');
    hamburguesa.innerHTML = '<span class="navbar-toggler-icon"></span>';

    contenedorHamburgesa.appendChild(hamburguesa);

    
    hamburguesa.addEventListener('click', function () {
        const navbarColor02 = document.getElementById('navbarColor02');
        navbarColor02.classList.toggle('active');
        hamburguesa.classList.toggle('active');
    });
});


const botonElemento = document.getElementById('cafesito'); 


botonElemento.classList.add('btn', 'btn-outline-warning');

document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        let nombre = document.getElementById('IdNombre').value;
        let apellido = document.getElementById('IdApellido').value;
        let email = document.getElementById('Idemail').value;

       
        if (!/^[A-Za-z]+$/.test(nombre) || !/^[A-Za-z]+$/.test(apellido)) {
            alert('Nombre y apellido solo deben contener letras.');
            event.preventDefault();
            return;
        }

      
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Formato de correo electrónico inválido.');
            event.preventDefault();
            return;
        }

      

    });
});
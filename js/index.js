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

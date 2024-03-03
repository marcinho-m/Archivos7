const boton = document.querySelector('.btn');
const contenedor = document.querySelector('.prueba');
const enviado = document.querySelector('.contenedor-dos');
const discard = document.getElementById('discard');
const input = document.querySelector('.email')
const mensajeError = document.querySelector('.error');

boton.addEventListener('click', (e) => {
    e.preventDefault();
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (input.value === "") {
        mensajeError.textContent = "Email cannot be empty";
        input.classList.add('emailRojo');
    } 
    
    else if (input.value.match(validEmail)) {
        enviado.classList.add('activo'); 
        enviado.classList.remove('contenedor-dos');

        contenedor.classList.add('escondido');
        contenedor.classList.remove('prueba');
    } else {
        mensajeError.textContent = "Valid email required";
        input.classList.add('emailRojo');
    }
 
    
})

discard.addEventListener('click', () => {
    contenedor.classList.remove('escondido');
    contenedor.classList.add('prueba');

    enviado.classList.remove('activo'); 
    enviado.classList.add('contenedor-dos');
    mensajeError.textContent = "";
    input.value = "";
    input.classList.remove('emailRojo');
})
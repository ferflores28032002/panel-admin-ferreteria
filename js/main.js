
// Variables de Secciones estaticas

const usuario = 'admin';
const contrasena = 'admin';

// Boton de formulario
const boton = document.getElementById('btn');
const alerta = document.querySelector('.alerta');

// Traemos el span para cambiar el texto que contiene segun su situacion
const alerta2 = document.querySelector('.alerta2');


// si ocurre el evento Keyup an blur, borre las clases de alerta
if(window.addEventListener('keyup',()=>{
    alerta.classList.remove('active')
}));
if(window.addEventListener('blur',()=>{
    alerta.classList.remove('active')
}));


// Ejecutamos una funcion al iniciar sesion con el usuario correcto y lo
// mandamos a otra pagina (panel de administración)

boton.addEventListener('click',()=>{
    const user = document.getElementById('usuario').value;
    const pass = document.getElementById('pass').value;

    if((user == usuario) && (pass == contrasena)){
        window.location="../vistas/panel.html";
    }
    if((user != usuario) || (pass != contrasena)){
        alerta.classList.add('active');
        alerta2.textContent='El Usuario no existe, vuelve a intentarlo!';
    }
    if((user == '') || (pass == '')){
        alerta2.innerHTML='Por Favor, rellena los campos correctamente! ';
    }
});



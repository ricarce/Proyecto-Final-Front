document.addEventListener('DOMContentLoaded', () => {

    const campoNombre = document.getElementById('tuNombre');
    const campoCorreo = document.getElementById('tuCorreo');
    const campoMensaje = document.getElementById('tuMensaje');
    const formulario = document.getElementById('formularioContacto');

    // Cargar datos guardados
    campoNombre.value = localStorage.getItem('contacto_nombre') || '';
    campoCorreo.value = localStorage.getItem('contacto_correo') || '';
    campoMensaje.value = sessionStorage.getItem('contacto_mensaje') || '';

    // Guardar mientras escribe
    campoNombre.addEventListener('input', () => {
        localStorage.setItem('contacto_nombre', campoNombre.value);
    });

    campoCorreo.addEventListener('input', () => {
        localStorage.setItem('contacto_correo', campoCorreo.value);
    });

    campoMensaje.addEventListener('input', () => {
        sessionStorage.setItem('contacto_mensaje', campoMensaje.value);
    });

    // Limpiar almacenamiento al enviar
    formulario.addEventListener('submit', () => {

        localStorage.removeItem('contacto_nombre');
        localStorage.removeItem('contacto_correo');
        sessionStorage.removeItem('contacto_mensaje');

    });

});
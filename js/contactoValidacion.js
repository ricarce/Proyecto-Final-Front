document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formularioContacto");

    const tuNombre = document.getElementById("tuNombre");
    const tuCorreo = document.getElementById("tuCorreo");
    const tuMensaje = document.getElementById("tuMensaje");


    function mostrarEstadoCampo(input, valido, mensaje = "") {

        const grupo = input.parentElement;
        const error = grupo.querySelector(".texto-error");

        if (valido) {

            grupo.classList.remove("error");
            input.style.borderColor = "#28a745";
            error.textContent = "";

        } else {

            grupo.classList.add("error");
            input.style.borderColor = "#dc3545";
            error.textContent = mensaje;

        }
    }


    function correoValido(correo) {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return regex.test(correo);

    }


    tuNombre.addEventListener("input", () => {

        mostrarEstadoCampo(
            tuNombre,
            tuNombre.value.trim() !== "",
            "Ingresá tu nombre."
        );

    });


    tuCorreo.addEventListener("input", () => {

        if (tuCorreo.value.trim() === "") {

            mostrarEstadoCampo(
                tuCorreo,
                false,
                "Ingresá un correo."
            );

        } else {

            mostrarEstadoCampo(
                tuCorreo,
                correoValido(tuCorreo.value.trim()),
                "Correo inválido."
            );

        }

    });


    tuMensaje.addEventListener("input", () => {

        mostrarEstadoCampo(
            tuMensaje,
            tuMensaje.value.trim() !== "",
            "Escribí un mensaje."
        );

    });


    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        let valido = true;

        if (tuNombre.value.trim() === "") {

            mostrarEstadoCampo(tuNombre, false, "Ingresá tu nombre.");

            valido = false;

        }

        if (!correoValido(tuCorreo.value.trim())) {

            mostrarEstadoCampo(tuCorreo, false, "Correo inválido.");

            valido = false;

        }

        if (tuMensaje.value.trim() === "") {

            mostrarEstadoCampo(tuMensaje, false, "Escribí un mensaje.");

            valido = false;

        }

        if (valido) {

            formulario.submit();

        }

    });

});
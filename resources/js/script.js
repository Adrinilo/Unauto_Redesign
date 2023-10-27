document.addEventListener("DOMContentLoaded", function () {
    // Accede al elemento de entrada
    var fechaHoraInput = document.getElementById("fecha_hora");
    var fechaInput = document.getElementById("fecha");

    // Obtiene la fecha y hora actuales
    var fechaHoraActual = new Date();

    // Formatea la fecha en "YYYY-MM-DD"
    var fechaActual = fechaHoraActual.toISOString().slice(0, 10);

    // Formatea la hora en "HH:MM"
    var horaActual = fechaHoraActual.toTimeString().slice(0, 5);

    // Asigna la fecha y la hora a los campos correspondientes
    fechaHoraInput.value = fechaActual + "T" + horaActual;
    fechaInput.value = fechaActual;
});
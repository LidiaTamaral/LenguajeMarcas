function Saludar() {

    var edad = document.getElementById("edad").value;
    var nombre = document.getElementById("nombre").value;

if (edad>=18) {
    alert (nombre + " Eres Mayor de edad")
}
else {
    alert (nombre + " Eres Menor de edad")
}
}
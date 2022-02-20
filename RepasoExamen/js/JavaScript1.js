

function saludar() {
    let nombre = document.getElementById('input_nombre');
    let valor_nombre = nombre.value;
    alert ("Hola " + valor_nombre);
    
    let cantidad = valor_nombre.length;
    alert ("Tu nombre tiene " + cantidad + " letras");

    console.log(valor_nombre);
}



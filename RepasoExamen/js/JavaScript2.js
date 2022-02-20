function MayorMenor () {
    const edad = document.getElementById('input_edad');
    const valor_edad = edad.value;
    console.log(valor_edad);
    if (valor_edad >= 18) {
        alert ("Eres mayor de edad");
    } 
    else {
        alert ("Eres menor de edad");
    }
};
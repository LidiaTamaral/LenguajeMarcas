function hacerBusqueda() {
    let valor_select = document.getElementById("buscador").value;
    let formulario = document.forms[0];
    //var valor_select = document.getElementsByTagName("select")[0].value;
    switch(valor_select) {
        case "g":
            formulario.action="https://www.google.com/search"
        break;
        case "y":
        formulario.action="https://es.search.yahoo.com/search"
        break;
    }
    if (document.getElementById("campo_busqueda").value!="") {
        formulario.submit();
    }
    else {
        alert("Por favor, rellene el campo");
        document.getElementById("campo_busqueda").focus();
    }
}
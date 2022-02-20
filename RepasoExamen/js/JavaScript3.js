function CambiarAnimales() {
    let despleg = document.getElementsByTagName('select')[0];
    let imagen = document.getElementsByTagName('img')[0];
    let enlace = document.getElementsByTagName('a')[0];
    let animal = despleg.value;

    switch(animal) {
        case 'PE':
            imagen.src="../img/perro.jpg";
            enlace.href="https://es.wikipedia.org/wiki/Canis_familiaris";
            enlace.innerHTML="Ir a Perro";
            enlace.hidden=false;
        break;
        case 'GA':
            imagen.src="../img/gato.jpg";
            enlace.href="https://es.wikipedia.org/wiki/Felis_silvestris_catus";
            enlace.innerHTML="Ir a Gato";
            enlace.hidden=false;
        break;
        case 'PZ':
            imagen.src="../img/pez.jpg"
            enlace.href="https://es.wikipedia.org/wiki/Pez";
            enlace.innerHTML="Ir a Pez";
            enlace.hidden=false;
        break;
        default:
            imagen.src="";
            enlace.hidden=true;
        break;

    }
}
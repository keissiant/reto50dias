//Se seleccionan y se guardan en variables los elementos
let imagenes = document.querySelectorAll(".paisaje");
let contendor = document.querySelector(".contendor-grid");
let texto = document.querySelectorAll(".paisaje p");
let elemento;

//Se aplica evento click a cada imagen
imagenes.forEach(imagen => {
    imagen.addEventListener("click", (e) => {
        // poner la clase ocultar
        texto.forEach(elementos => {
            elementos.classList.add("ocultar");
        });
        //if para que seleccione siempre la caja dado el caso de que se haga click en el texto de la imagen
        if (e.target.nodeName == "P") {
            elemento = e.target.parentElement.id;
        } else {
            elemento = e.target.id;
        }
        //identificamos a cual imagen se le esta haciendo click para poder agrandarla
        if (elemento == 1) {
            contendor.style.gridTemplateColumns = "5fr .4fr .4fr .4fr";
            texto[0].classList.remove("ocultar");
        } else if (elemento == 2) {
            contendor.style.gridTemplateColumns = ".4fr 5fr .4fr .4fr";
            texto[1].classList.remove("ocultar");
        } else if (elemento == 3) {
            contendor.style.gridTemplateColumns = ".4fr .4fr 5fr .4fr";
            texto[2].classList.remove("ocultar");
        } else if (elemento == 4) {
            contendor.style.gridTemplateColumns = ".4fr .4fr .4fr 5fr";
            texto[3].classList.remove("ocultar");

        }

    })
});

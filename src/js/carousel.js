//LOS JS LOS HE HECHO CON VARIOS TUTORIALES DE INTERNET, NO HE PODIDO HACERLOS YO SOLA

//Carousel

const carousel = document.querySelector('.rrss-carousel');
    const moves = document.querySelectorAll('.rrss-slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let i = 0; //contador 
    const totalMoves = moves.length; // el numero total de imagenes en el carrusel
    const elementWidth = moves[0].offsetWidth; // el ancho de cada imagen (offsetWidth es el ancho de un elemento) (solo se toma el ancho de la primera imagen porque todas las imagenes tienen el mismo ancho)


    prev.addEventListener('click', () => { // cuando se hace click en el boton de ir a la imagen anterior
        if (i > 0) { // si el contador es mayor a 0
            i--; // se le resta 1 al contador, osea que se va a la imagen anterior
            updateCarousel(); // se actualiza el carrusel
        }
    });

    next.addEventListener('click', () => { // cuando se hace click en el boton de ir a la imagen siguiente
        if(window.innerWidth < 1024){
            if (i < totalMoves - 2) { // si el contador es menor al numero total de imagenes - 1  (asi no se queda en blanco al pasar la ultima imagen)
                i++; // se le suma 1 al contador, osea que se va a la imagen siguiente
                updateCarousel(); // se actualiza el carrusel
            }
        }else{
            if (i < totalMoves - 2) { // he añadido aqui el -2 porque si no habia demasiado blanco al lado de la ultima imagen
                i++;
                updateCarousel();
            }
        }
        
    });

    function updateCarousel() {
        let offset = -i * elementWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }


    /*hay un problema y es que aunque he añadido -2, si ya estas en la ultima imagen
    y cambias a la pantalla grande, se queda en blanco, no se como solucionarlo*/


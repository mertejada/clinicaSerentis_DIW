const nav = document.querySelector("#nav-links");
const open = document.querySelector("#abrir");
const close = document.querySelector("#cerrar");

open.addEventListener("click", () => { // al hacer click en abrir
    nav.classList.add("visible"); // hacemos que el menú sea visible
    open.style.display = "none"; // el boton de abrir desaparece
    close.style.display = "inline-block"; //aparece el boton cerrar
}); 

close.addEventListener("click", () => { //al contrario
    nav.classList.remove("visible"); // el menu desaparece
    open.style.display = "inline-block";
    close.style.display = "none";
});


//he tenido que añadir esto porque si no, al cambiar de tamaño de pantalla,el boton que estuviera visible no desaparecia
window.addEventListener("resize", () => { 
    if (window.innerWidth > 800) {
        nav.classList.remove("visible");
        open.style.display = "none";
        close.style.display = "none";
    } else {
        open.style.display = "block";
        close.style.display = "block";
    }
});

if (window.innerWidth > 800) {
    open.style.display = "none";
    close.style.display = "none";
} else {
    open.style.display = "inline-block";
    close.style.display = "none";
}

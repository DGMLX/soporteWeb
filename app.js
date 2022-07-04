const divLoader = document.querySelector(".div-loader");
window.addEventListener("load",vanish);
function vanish(){
    divLoader.classList.add("disappear");
}


const menu = document.querySelector(".bi-list");

cargarEventListeners();
function cargarEventListeners(){
    menu.addEventListener("click",menuResponsive);
}

function menuResponsive(){
    const nav = document.querySelector(".contenedor-nav");
    const header = document.querySelector("header");
    const navegacion = document.querySelector("nav");
    const divLogos = document.querySelector(".div-logos");
    if(!menu.classList.contains("active")){
        menu.classList.add("active");
        nav.style.display="block";
        nav.style.height="auto";
        nav.style.zIndex = "9999";
        nav.style.animation ="animacionNav";
        nav.style.animationDuration = ".5s";
        navegacion.style.animation="aparecer";
        navegacion.style.animationDuration=".5s";
        divLogos.style.animation ="aparecer";
        divLogos.style.animationDuration=".5s";
    }else{
        nav.style.animation ="animacionNavReverse";
        nav.style.animationDuration = "1s";
        setTimeout(() => {
            nav.style.display="none"
        }, 900);
        menu.classList.remove("active");
    }
}

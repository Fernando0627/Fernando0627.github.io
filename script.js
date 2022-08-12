// FUNCION QUE ME APLICA EL ESTIL A LA OPCION DE SECIONADA EN EL MENU  Y QUITA LA PREVIAMENTE SELECIONADO 
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className="";
    opciones[1].className="";
    opciones[2].className="";
    opciones[3].className="";
    opciones[4].className="";
    link.className = "seleccionado";

// HACEMOS DESAPAR4CER EL MENU UNA VEZ QUE SE HA SELECIONADO UNA OPCION EN EL MODO RESPONSIVE
    var x = document.getElementById("nav");
    x.className = "";

}
//FUNCION QUE MUESTRA EL MENU RESPOSIVE
function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className==="") {
        x.className= "responsive";
    }else {
        x.className="";
    }
}

//DECTETO EL SCROLLING PARA APLICAR LA ANIMACION DE LAS BARRAS DE HABILIDADES
window.onscroll = function (){
    efectoHabilidades;
}

//FUNCION QUE APLICA LA ANIMACION DE LA BARRA DE HABILIDADES
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if(distancia_skills >=300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("ps").classList.add("barra-progreso3");
        document.getElementById("bd").classList.add("barra-progreso4");
    }
}
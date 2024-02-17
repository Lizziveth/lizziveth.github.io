var textoExplicativo = {
    "Recuerdo": "Aquel Recuerdo, el primero que creamos en nuestra primer mazmorra, ahora forma parte de mi Zobal, pero creeme que aún 'Recuerdo' que te gustaría tenerlo como mimobionte, no te preocupes, cariño, así va a ser en un futuro.",
    "Vertox": "Y acompañando la foto anterior, aquí estamos, tu y yo hace tantos meses ya principe y princesa, un bonito comienzo de una hermosa relación",
    "Gremio": "6 de octubre, 2023, el día en el que me invitaste a unirme a La Orden Real, uno de los mejores gremios que he visto en el juego, tanto por su líder, su gente y el ambiente que ofrece, muchas gracias.",


    "Javeho": "Mi mujer y yo, justo después de acabar la mazmorra, un momento íntimo que guardo en mi corazón.",
    "textoLindo": "Una de nuestras primeras conversaciones de cariño, 'Recuerdo' que te dió pena que lo dijera en el chat local, pero después de cerrar el saco, pudimos darnos cariño de esta forma, fue demasiado lindo hay que repetir :3.",
    "Tejos": "Juntas, antes de pasar esa mazmorra XD, recuerdo que me mostraste el sonido al caminar por los huesos y nos quedamos embobadas un buen rato Jjssjsjs",
    "Javeho2": "Esta fue tomada recién, después de farmear lágrimas para febrero, quería guardar este recuerdo también, representando nuestra travesía por las moduladas n.n",
    "SoulKnight": "Justo hace unas horas, un nuevo jueguito para compartir, me dió mucho gusto que te pusieras el anillo conmigo, entendiste de una lo que quiería XD",

    
    "Tahitariana": "'Tahitariana de los vientos, para ti', ese regalo que guardaste por meses, y que ahora se quedará en mi cofre hasta el fin de los tiempos.",
    "Tahitariana2": "Como olvidar este momento, tantas palabras hermosas que me dijiste, tanta calidez que me ofreciste después de entregarme aquella flor, simplemente jamás se irán de mi mente.",
    "Edelweiss": "El regalo que nos di para Noviembre, ahora reside en nuestros sacos, para mi.",
    
    "Anillos": "Mi principe, arrodillada ante mi cada vez que fabrica un anillo nuevo para mi, por nosotras, nunca dejará de enternecer mi corazón y llenarme de cariño",
    "Espadas": "Cuando me enseñaste a poner emotes en cualquier dirección, y nos pusimos a hacer esta pose tan linda {3",
    "Hosca": "Aquel día, en el que por fin pudimos evolucionar aquella hosca que te acompañó por tanto tiempo, y seguirá haciéndolo por mucho más, ahora más fuerte, para mi príncipe",

    "poseGuapa": "Una de tus poses mas bonitas, me dejas ver esa delicadeza, esa hermosura que tanto me cautiva, una mujer fuerte, valiente e independiente, pero que también puede ser linda y femenina para mi.",
    "Frigost": "Representando aquella conversación que tuvimos en Kontatrás, ahora ese lugar es uno de mis favoritos también, y voy cada que me siento agotada o sin ganas de nada, o de solo pensar, gracias",
    "Wabbit": "Ese día en el que exploramos la nueva Wabbit, maravillándonos con lo que encontrabamos, hasta que nos topamos ese lugar y decidiste tomar una foto de nosoras, bien bellas. Te amo"
   
};

function openPopup(imgSrc, imgAlt) {
    console.log("Imagen alt:", imgAlt);
    console.log("Texto explicativo:", textoExplicativo[imgAlt]);
    var popup = document.getElementById("popup");
    var popupImg = document.getElementById("popup-img");
    var popupText = document.getElementById("popup-text");
    popupImg.src = imgSrc;
    popupImg.alt = imgAlt;
    popupText.textContent = textoExplicativo[imgAlt];
    popupText.classList.add("popup-text-styling"); 
    popup.style.display = "block";
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
    var popupText = document.getElementById("popup-text");
    popupText.classList.remove("popup-text-styling"); 
    popup.style.display = "none";
}

window.onclick = function(event) {
    var popup = document.getElementById("popup");
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

    

var audio = document.querySelector('audio');

window.addEventListener('beforeunload', function() {
    localStorage.setItem('audioTime', audio.currentTime);
});


window.addEventListener('load', function() {
    var audioTime = localStorage.getItem('audioTime');
    if (audioTime !== null) {
        audio.currentTime = parseFloat(audioTime);
    }
});

const heartsContainer = document.getElementById("hearts-container");

const tamanosCorazon = ["corazon-50", "corazon-60", "corazon-70", "corazon-80", "corazon-90", "corazon-100", "corazon-110", "corazon-120", "corazon-130", "corazon-140"];


function randomPosition() {
    return Math.random() * 100 + "%";
}

function generateHearts() {
   
    heartsContainer.innerHTML = "";

   
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("li");
        const randomIndex = Math.floor(Math.random() * tamanosCorazon.length);
        const tamano = tamanosCorazon[randomIndex];
        heart.classList.add(tamano);
        heart.style.top = randomPosition(); 
        heart.style.left = randomPosition();
        heartsContainer.appendChild(heart);
    }
}


generateHearts();

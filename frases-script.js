const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');


const frasesPersonalizadas = [
  "...10/06/2023...",
  "Lo digo y lo diré siempre, gracias por brindarme la inspiración y apoyo que no has parado de darme desde un principio",
  "Voy a estar para ti todo el tiempo que me sea posible, lo sabes",
  "'Oh la love~'",
  "Mi crema de cielo, eres con quien sueño",
  "Eres mi luna, quien me acompaña por las noches y las ilumina, incluso si no estás conmigo, lo estás en mi mente",
  "Mi musa, mi novia, mi esposa, mi mujer, mi principe, mi dueña, mi señora, mi líder",
  "Las aventuras que vivo contigo son increibles, siempre soy capaz de divertirme incluso haciendo la cosa mas vanal del mundo cuando es contigo",
  "'How deep is your love...'",
  "Tu me haces brillar, mi 'Golden Hour' la tengo gracias a ti",
  "Estas frases, son complicadas, siento que ninguna hace justicia a lo que siento. Pero se que tu incluso con un te amo lo sabes",
  "'We belong to you and me...'",
  "Y como olvidar...Aquella primer frase que te dediqué 'I would do anything for you'",
  "Contigo, la vida me ha demostrado que soy capaz de amar y recibir el mismo amor, que no estoy condenada por un destino",
  "Vivo un sueño en mi realidad cuando estoy a tu lado",
  "Siempre estás en mi mente 'Just you in my Imagination'",
  "Creemos muchos más recuerdos juntas."    
];


jokeBtn.addEventListener('click', mostrarFrasePersonalizada);


function mostrarFrasePersonalizada() {
  
  const indice = Math.floor(Math.random() * frasesPersonalizadas.length);
  
  const frase = frasesPersonalizadas[indice];
  
  jokeEl.textContent = frase;
}


mostrarFrasePersonalizada();


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
        heart.style.top = randomPosition(); // Posición aleatori
        heart.style.left = randomPosition(); 
        heartsContainer.appendChild(heart);
    }
}


generateHearts();

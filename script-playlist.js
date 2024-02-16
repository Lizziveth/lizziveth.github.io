
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

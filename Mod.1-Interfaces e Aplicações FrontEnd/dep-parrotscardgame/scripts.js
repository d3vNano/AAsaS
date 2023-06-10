let QtdDeCartas = prompt("Com quantas cartas você quer jogar?");
  while (QtdDeCartas%2 !== 0 || QtdDeCartas < 4 || QtdDeCartas > 14) { 
    QtdDeCartas = prompt("Insira um número par entre 4 e 14!");
  }

  let cartas = ["images/capivara.gif",
  "images/capivara.gif",
  "images/maribel.gif",
  "images/maribel.gif",
  "images/bruno.gif",
  "images/bruno.gif",
  "images/dolores.gif",
  "images/dolores.gif",
  "images/isabela.gif",
  "images/isabela.gif",
  "images/luisa.gif",
  "images/luisa.gif",
  "images/pepa.gif",
  "images/pepa.gif"];
  
    let escolherCartas = cartas.slice(0, QtdDeCartas);
    escolherCartas.sort(comparador);

  function comparador() { 
	return Math.random() - 0.5; 
}

function addCartas () {
  let ul = document.querySelector("ul");
  for (let i = 0; i < escolherCartas.length; i++){
    ul.innerHTML += `
    <ul class="card" onClick="turnSelectedCard(this)">
    <li class="face"></li>
    <li class="back-face back img"><img src="${escolherCartas[i]}"></li>
    </ul>`
  }
}

addCartas();

let jogadas = 0;
let tentativas = 0;

function turnSelectedCard(element) {
  let selectedCardBack = document.querySelector(".selectedBackFace");
  let selectedCardFront = document.querySelector(".selectedFrontFace");
  element.querySelector(".face").classList.add("selectedFrontFace");
  element.querySelector(".back-face").classList.add("selectedBackFace");

  if(selectedCardBack !== null) {
    if (element.querySelector(".back-face").innerHTML === selectedCardBack.innerHTML) {
      element.querySelector(".face").classList.add("matchFrontFace");
      element.querySelector(".back-face").classList.add("matchBackFace");
      selectedCardFront.classList.add("matchFrontFace");
      selectedCardBack.classList.add("matchBackFace");
      tentativas++;
    }
      setTimeout( function() {
      element.querySelector(".face").classList.remove("selectedFrontFace");
      element.querySelector(".back-face").classList.remove("selectedBackFace");
      document.querySelector(".selectedBackFace").classList.remove("selectedBackFace");
      document.querySelector(".selectedFrontFace").classList.remove("selectedFrontFace");
    }, 1000);

  }
  jogadas++;

  if(tentativas === QtdDeCartas/2) {
    setTimeout( function() {
      let win = true;
      alert(`Nice! Você ganhou em ${jogadas} jogadas e demorou só ${counter} segundos!`);
    }, 50);
      setTimeout(function () {
      jogarNovamente();
  }, 2000)
  }
}

function jogarNovamente() {
  let win = false;
  let anotherRoundInvite = prompt("Bora jogar mais uma? (digite 'sim' ou 'não')");

  if (anotherRoundInvite === "sim") {
          {window.location.reload();}
      } else if (anotherRoundInvite === "não") {
      clearInterval(idInterval);
      alert("Até a próxima!")
  }
}

counter = 0;
let idInterval;

function timer() {
  idInterval = setInterval(increaseTimer, 1000);
}

function increaseTimer() {
      counter++;
      document.querySelector(".timer").innerHTML = counter + "s";
}

timer();
function Rango(rangoClicado) {
  let elemento = document.querySelector(".rango > .selected");
  if (elemento !== null) {
    elemento.classList.toggle("selected");
  }

  rangoClicado.classList.toggle("selected");

}

function Gole(goleClicado) {
  let elemento = document.querySelector(".gole > .selected");
  if (elemento !== null) {
    elemento.classList.toggle("selected");
  }

  goleClicado.classList.toggle("selected");

}

function Doce(doceClicado) {
  let elemento = document.querySelector(".doce > .selected");
  if (elemento !== null) {
    elemento.classList.toggle("selected");
  }

  doceClicado.classList.toggle("selected");

}

//quando rango, gole e doce estiver true o botao fica verde e muda o texto//

function fecharPedido() {
  let elemento = document.querySelector(".button");
  if (rangoClicado && goleClicado && doceClicado) {

    elemento.innerHTML = "Fechar Pedido";
  }
}


//innerHTML = "FECHAR PEDIDO"//
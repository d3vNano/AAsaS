let userName;
let usuario;
let informacoes = [];

function entrarButtom () {
    userName = document.querySelector(".login input").value;
    usuario = {name: userName};
    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", usuario);
    
    loader();
    
    promise.then(tratarSucesso);
    promise.catch(tratarErro);
}

function tratarSucesso(){
    document.querySelector(".openCard").classList.add("escondido")
    setInterval(userStatus, 5000);

    buscarMensagens();
}

function tratarErro(erro){
    const statusCode = erro.response.status;

    if (statusCode !== 200) {
        const remove = document.querySelector(".loader").classList.add("escondido");
        const add = document.querySelector(".login").classList.remove("escondido");
        
        const erroMsg = document.querySelector(".erroMsg");
        erroMsg.innerHTML = "Este nome já está em uso. Por favor, digite outro!";
    }

}

function userStatus (){
    const promise = axios.post("https://mock-api.driven.com.br/api/v6/uol/status", usuario);
    console.log(usuario);
}

function loader (){
    const loginEnd = document.querySelector(".login");
    loginEnd.classList.add("escondido");

    const loaderStart = document.querySelector(".loader");
    loaderStart.classList.remove("escondido");
}

function buscarMensagens () {
    const promise = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages")
    promise.then(function (response) {
        informacoes = response.data;
        console.log(informacoes);
    })
}






















function abrirMenu (){
   const elemento = document.querySelector("menu");
    elemento.classList.remove("escondido"); 
}

function fecharMenu (){
    const elemento = document.querySelector("menu");
     elemento.classList.add("escondido"); 
 }

//---------------------//
//--------API--------//
/*function entradaESaida (response){
    const promisse = axios.get("https://mock-api.driven.com.br/api/v6/uol/participants");

    promisse.then(document.querySelector(".mensagens").innerHTML = `
    <li class="messages InOut">
    (${timer}) ${usuario} entrou na sala...</li>
    `);
}

function renderizarEntrada (){

}

function manterConexão (){
    const promisse = axios.get("https://mock-api.driven.com.br/api/v6/uol/status");
}

function buscarMensagens (){
    const promisse = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
}

function enviarMensagens (response){
    const promisse = axios.post("https://mock-api.driven.com.br/api/v6/uol/messages");
    console.log(response);
}
*/


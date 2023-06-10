let userName;

let linkImg;

let chosenModel;
let chosenCollar;
let chosenTissue;

let API = "https://mock-api.driven.com.br/api/v4/shirts-api/shirts";
let renderApi;
let dataGet;

let regex;

askName();
function askName (){
    userName = prompt("Qual é o seu nome?");
}

function chooseAllAlert() {
  alert("Selecione todas as opções!");
}

function selectModel (select) {
    const itemSelect = document.querySelector(".model .selected");

    if (itemSelect !== null) {
      itemSelect.classList.remove("selected");
    }
  
    select.classList.add("selected");
    chosenModel = select.id;
    console.log(chosenModel);

    activateOrder();

}

function selectCollar (select) {
    const itemSelect = document.querySelector(".collar .selected");

    if (itemSelect !== null) {
      itemSelect.classList.remove("selected");
    }
  
    select.classList.add("selected");
    chosenCollar = select.id;
    console.log(chosenCollar);

    activateOrder();
}

function selectTissue (select) {
    const itemSelect = document.querySelector(".tissue .selected");

    if (itemSelect !== null) {
      itemSelect.classList.remove("selected");
    }
  
    select.classList.add("selected");
    chosenTissue = select.id;
    console.log(chosenTissue);

    activateOrder();
}

function assignValue (valor) {
  linkImg = document.querySelector(".fourth input").value;

  if (linkImg !== undefined) {
    activateOrder();
  }
}

function activateOrder () {
  const model = document.querySelector(".first .selected");
  const collar = document.querySelector(".second .selected");
  const tissue = document.querySelector(".third .selected");
  const requestButton = document.querySelector(".fourth button");

  if (model !== null && collar !== null && tissue !== null && linkImg !== undefined) {
    
    requestButton.classList.add("active");
    requestButton.innerHTML = "Confirmar pedido";
    requestButton.setAttribute("onClick", "completeOrder()");
  }
}

function completeOrder () {
  assignValue();
  const promise = axios.post(API, 
    {
      "model": chosenModel,
      "neck": chosenCollar,
      "material": chosenTissue,
      "image": linkImg,
      "owner": "Criador: " + userName,
      "author": userName
    }
  );

  promise.then(alert("Confirmamos sua encomenda! Obrigado."))
  promise.catch(alert("Ops! Insira um Link de Imagem válido!"))
  renderAPI ();
}

function renderAPI (){
  renderAPI = axios.get(API);
  renderAPI.then(saveData);
}
renderAPI ();

function saveData (data){
  dataGet = data.data;
  console.log(dataGet);
  lastOrders();  
}

function lastOrders () {
  const elemento = document.querySelector("footer ul");
  elemento.innerHTML = "";
  let size = Number(dataGet.length);

  for(let i=0; i<size; i++) {
    let name = dataGet[i].owner;
    let img = dataGet[i].image;
    elemento.innerHTML += `
    <li>
      <img src="${img}"/>
      <p><strong>Criador: ${name}</strong></p>
    </li>
    `
  }
}
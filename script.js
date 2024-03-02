// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { collectionGroup } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js';
import { getFirestore, collection, getDocs, query, where } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore-lite.js';

const firebaseConfig = {
  apiKey: "AIzaSyB6HOiUI9tMOKG7xa7U42C7ELM8xVQUboU",
  authDomain: "sushikebi.firebaseapp.com",
  projectId: "sushikebi",
  storageBucket: "sushikebi.appspot.com",
  messagingSenderId: "124195732952",
  appId: "1:124195732952:web:c5f9a269799d8fad3486ad",
  measurementId: "G-QYDZE4KHGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Função para obter produtos
async function getProducts(db) {
    const productsList = [];
    const querySnapshot = await getDocs(collection(db, 'Produtos'));
  
    querySnapshot.forEach((doc) => {
      const product = doc.data();
      product.id_produto = doc.id;
      productsList.push(product);
    });
  
    return productsList;
  }
  
  // Exemplo de uso

  var listaNome = []
  var listaDesc = []
  var listaIngr = []
  
  getProducts(db)
    .then((productsList) => {
    
    for (let i = 0; i<=productsList.length;i++) {
        console.log(productsList[i].Nome);
        listaNome.push(productsList[i].Nome)
        listaDesc.push(productsList[i].Descricao)
        listaIngr.push(productsList[i].Ingredientes)

    }

    })
    .catch((err) => {
      console.log("Erro: " + err);
    });

  // -------



function carregarFeed(nome, preco, valorAntigo, desconto) {
    // Criação do elemento div com a classe "card"
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    // Criação do elemento div com a classe "card-img"
    const cardImgDiv = document.createElement('div');
    cardImgDiv.classList.add('card-img-prod');
    cardImgDiv.classList.add('card-img');
    cardDiv.appendChild(cardImgDiv);

    // Criação do elemento div com a classe "card-details"
    const cardDetailsDiv = document.createElement('div');
    cardDetailsDiv.classList.add('card-details');
    cardDiv.appendChild(cardDetailsDiv);

    // Criação do elemento div com a classe "stars-container"
    const starsContainerDiv = document.createElement('div');
    starsContainerDiv.classList.add('stars-container');

    // Adição de cinco elementos img com a classe "stars" e atributos src e alt
    for (let i = 0; i < 5; i++) {
        const starImg = document.createElement('img');
        starImg.classList.add('stars');
        starImg.src = 'img/star.png';
        starImg.alt = '';
        starsContainerDiv.appendChild(starImg);
    }

    cardDetailsDiv.appendChild(starsContainerDiv);

    // Criação do elemento h3 com a classe "card-sales" e texto "15 vendas"
    const cardSalesH3 = document.createElement('h3');
    cardSalesH3.classList.add('card-sales');
    cardSalesH3.textContent = '15 vendas';
    cardDetailsDiv.appendChild(cardSalesH3);

    // Criação do elemento p com a classe "title" e texto "Combinado de Sushi"
    const titleP = document.createElement('p');
    titleP.classList.add('title');
    titleP.textContent = nome;
    cardDetailsDiv.appendChild(titleP);

    // Criação do elemento div com a classe "price-container"
    const priceContainerDiv = document.createElement('div');
    priceContainerDiv.classList.add('price-container');

    // Criação do elemento div com a classe "before-container"
    const beforeContainerDiv = document.createElement('div');
    beforeContainerDiv.classList.add('before-container');

    // Criação do elemento p com a classe "before" e texto "R$35,64"
    const beforeP = document.createElement('p');
    beforeP.classList.add('before');
    beforeP.textContent = valorAntigo;
    beforeContainerDiv.appendChild(beforeP);

    // Criação do elemento p com a classe "promotion" e texto "-44%"
    const promotionP = document.createElement('p');
    promotionP.classList.add('promotion');
    promotionP.textContent = desconto;
    beforeContainerDiv.appendChild(promotionP);

    priceContainerDiv.appendChild(beforeContainerDiv);

    // Criação do elemento p com a classe "price" e texto "R$19,90"
    const priceP = document.createElement('p');
    priceP.classList.add('price');
    priceP.textContent = preco;
    priceContainerDiv.appendChild(priceP);

    cardDetailsDiv.appendChild(priceContainerDiv);

    // Criação do elemento button com a classe "btn" e id "bt", e texto "Garanta o seu"
    const button = document.createElement('button');
    button.classList.add('btn');
    button.id = 'bt';
    button.textContent = 'Garanta o seu';
    cardDetailsDiv.appendChild(button);

    // Adiciona o elemento criado ao corpo do documento (ou a um elemento específico)
    document.body.appendChild(cardDiv);

}

function carregarTopo() {
    // Criar a seção com a classe "div-section"
    const section = document.createElement('section');
    section.classList.add('div-section');

    // Criar a div com a classe "div-section-title" dentro da seção
    const divSectionTitle = document.createElement('div');
    divSectionTitle.classList.add('div-section-title');

    // Criar barras horizontais e adicioná-las à divSectionTitle
    for (let i = 0; i < 2; i++) {
        const horizontalBar = document.createElement('div');
        horizontalBar.classList.add('horizontal-bar');
        divSectionTitle.appendChild(horizontalBar);
    }

    // Adicionar o elemento h2 à divSectionTitle
    const h2 = document.createElement('h2');
    h2.textContent = 'Promoção do dia';
    divSectionTitle.appendChild(h2);

    // Anexar divSectionTitle à seção
    section.appendChild(divSectionTitle);

    // Criar o card com a classe "card" dentro da seção
    const card = document.createElement('div');
    card.classList.add('card');

    // Criar a div card-img e adicioná-la ao card
    const cardImg = document.createElement('div');
    cardImg.classList.add('card-img');
    cardImg.classList.add('card-img-prod');
    card.appendChild(cardImg);

    // Criar a div card-details e adicioná-la ao card
    const cardDetails = document.createElement('div');
    cardDetails.classList.add('card-details');

    // Criar a div stars-container e adicionar estrelas a ela
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars-container');

    for (let i = 0; i < 5; i++) {
        const star = document.createElement('img');
        star.src = 'img/star.png';
        star.alt = '';
        star.classList.add('stars');
        starsContainer.appendChild(star);
    }

    // Adicionar starsContainer ao cardDetails
    cardDetails.appendChild(starsContainer);

    // Adicionar outros elementos (h3, p, div, button) ao cardDetails
    const h3CardSales = document.createElement('h3');
    h3CardSales.classList.add('card-sales');
    h3CardSales.textContent = '15 vendas';

    const pTitle = document.createElement('p');
    pTitle.classList.add('title');
    pTitle.textContent = 'Combinado de Sushi';

    const priceContainer = document.createElement('div');
    priceContainer.classList.add('price-container');

    // Criar a div before-container e adicionar elementos a ela
    const beforeContainer = document.createElement('div');

    const pBefore = document.createElement('p');
    pBefore.classList.add('before');
    pBefore.textContent = 'R$35,64';

    const pPromotion = document.createElement('p');
    pPromotion.classList.add('promotion');
    pPromotion.textContent = '-44%';

    beforeContainer.appendChild(pBefore);
    beforeContainer.appendChild(pPromotion);

    // Adicionar beforeContainer e pPrice ao priceContainer
    priceContainer.appendChild(beforeContainer);

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = 'R$19,90';

    priceContainer.appendChild(pPrice);

    // Criar o botão com a classe "btn" e o id "bt"
    const button = document.createElement('button');
    button.classList.add('btn');
    button.id = 'bt';
    button.textContent = 'Garanta o seu';

    // Adicionar o botão ao cardDetails
    cardDetails.appendChild(h3CardSales);
    cardDetails.appendChild(pTitle);
    cardDetails.appendChild(priceContainer);
    cardDetails.appendChild(button);

    // Adicionar cardDetails ao card
    card.appendChild(cardDetails);

    // Adicionar card à seção
    section.appendChild(card);

    // Anexar a seção ao corpo do documento
    document.body.appendChild(section);

    // Criar a seção "offer" com o id "offer"
    const offerSection = document.createElement('section');
    offerSection.id = 'offer';

    // Criar elementos dentro da seção "offer"
    const pOfferTitle = document.createElement('p');
    pOfferTitle.classList.add('title');
    pOfferTitle.textContent = 'Tempo Restante:';

    const timerContainer = document.createElement('div');
    timerContainer.id = 'timer-container';

    // Criar divs de tempo e adicioná-las ao timerContainer
    const timeUnits = ['Horas', 'Minutos', 'Segundos'];

    for (const unit of timeUnits) {
        const timeDiv = document.createElement('div');
        
        const pTimeValue = document.createElement('p');
        pTimeValue.classList.add('time-value');
        pTimeValue.textContent = '00';

        const pTimeDescription = document.createElement('p');
        pTimeDescription.classList.add('time-description');
        pTimeDescription.textContent = unit;

        timeDiv.appendChild(pTimeValue);
        timeDiv.appendChild(pTimeDescription);

        timerContainer.appendChild(timeDiv);
    }

    // Adicionar elementos à seção "offer"
    offerSection.appendChild(pOfferTitle);
    offerSection.appendChild(timerContainer);

    // Anexar a seção "offer" ao corpo do documento
    document.body.appendChild(offerSection);

    // Criar a "div-section" com o id "div-section-produtos"
    const divSectionProdutos = document.createElement('div');
    divSectionProdutos.classList.add('div-section');
    divSectionProdutos.id = 'div-section-produtos';

    // Criar "div-section-title" e adicionar barras horizontais e h2 a ela
    const divSectionTitleProdutos = document.createElement('div');
    divSectionTitleProdutos.classList.add('div-section-title');

    for (let i = 0; i < 2; i++) {
        const horizontalBar = document.createElement('div');
        horizontalBar.classList.add('horizontal-bar');
        divSectionTitleProdutos.appendChild(horizontalBar);
    }

    const h2Produtos = document.createElement('h2');
    h2Produtos.textContent = 'Produtos';

    divSectionTitleProdutos.appendChild(h2Produtos);

    // Adicionar divSectionTitleProdutos à divSectionProdutos
    divSectionProdutos.appendChild(divSectionTitleProdutos);

    // Anexar divSectionProdutos ao corpo do documento
    document.body.appendChild(divSectionProdutos);

    // Criar a seção "produtos" com o id "produtos"
    const produtosSection = document.createElement('section');
    produtosSection.id = 'produtos';

    // Anexar produtosSection ao corpo do documento
    document.body.appendChild(produtosSection);

}

function carregarFinal() {
    // Criação do elemento 'section'
const sectionElement = document.createElement('section');

// Criação do elemento 'div' com ID "hr"
const hrDivElement = document.createElement('div');
hrDivElement.id = 'hr';

// Criação do elemento 'container' com ID "contact"
const contactContainerElement = document.createElement('container');
contactContainerElement.id = 'contact';

// Criação do elemento 'h1' dentro do container
const h1Element = document.createElement('h1');
h1Element.textContent = 'Entre em contato conosco e faça seu pedido!';

// Criação do elemento 'div' com ID "contact-details"
const contactDetailsDivElement = document.createElement('div');
contactDetailsDivElement.id = 'contact-details';

// Criação do elemento 'img' dentro do "contact-details" com atributos 'src' e 'alt'
const imgElement = document.createElement('img');
imgElement.src = 'img/vector-call.png';
imgElement.alt = 'imagem ilustrativa sobre ligação';
imgElement.id = 'vector-call';

// Criação do elemento 'div' com ID "contact-details-number"
const contactDetailsNumberDivElement = document.createElement('div');
contactDetailsNumberDivElement.id = 'contact-details-number';

// Criação do elemento 'p' dentro do "contact-details-number"
const pElement1 = document.createElement('p');
pElement1.textContent = 'Manda um Zap!';

// Criação do elemento 'img' dentro do "contact-details-number" com atributos 'src' e 'alt'
const imgElement2 = document.createElement('img');
imgElement2.src = 'img/whatsapp.png';
imgElement2.alt = 'ícone whatsapp';

// Criação do elemento 'p' dentro do "contact-details-number" com ID "tell"
const pElement2 = document.createElement('p');
const aElement = document.createElement('a');
aElement.href = 'tel:+5511955258195';
aElement.textContent = '+55 (11)94214-5352';
pElement2.id = 'tell';
pElement2.appendChild(aElement);

// Criação do primeiro container de círculo
const circleContainer1 = document.createElement('div');
circleContainer1.classList.add('circle-vector-container');
circleContainer1.id = 'circle-vector-1';

// Criação do primeiro círculo dentro do container
const circle1 = document.createElement('div');
circle1.classList.add('circle');

// Criação do segundo container de círculo
const circleContainer2 = document.createElement('div');
circleContainer2.classList.add('circle-vector-container');
circleContainer2.id = 'circle-vector-2';

// Criação do segundo círculo dentro do container
const circle2 = document.createElement('div');
circle2.classList.add('circle');

// Adição dos elementos criados à estrutura do HTML
contactDetailsNumberDivElement.appendChild(pElement1);
contactDetailsNumberDivElement.appendChild(imgElement2);
contactDetailsNumberDivElement.appendChild(pElement2);

contactDetailsDivElement.appendChild(imgElement);
contactDetailsDivElement.appendChild(contactDetailsNumberDivElement);

contactContainerElement.appendChild(h1Element);
contactContainerElement.appendChild(contactDetailsDivElement);
contactContainerElement.appendChild(circleContainer1);
contactContainerElement.appendChild(circleContainer2);

sectionElement.appendChild(hrDivElement);
sectionElement.appendChild(contactContainerElement);

// Adiciona a seção ao corpo do documento
document.body.appendChild(sectionElement);

}

let imgBannerList = document.querySelectorAll(".card-img-prod")
let descDetails = document.querySelector('#details-click')
let overlay = document.querySelector('#overlay')
let body = document.querySelector('body')
let backButton = document.querySelector("#backButton")

Array.from(imgBannerList).forEach((imgBanner)=>{
    imgBanner.addEventListener('click',()=>{
        descDetails.style.display="flex"
        overlay.style.display="flex"
        body.style.overflowY = "hidden"
        console.log(listaDesc)
        console.log(listaIngr)
        console.log(listaNome)
    })
})

backButton.addEventListener('click',()=>{
    descDetails.style.display="none"
    overlay.style.display="none"
    body.style.overflowY = "visible"
})
console.log(listaNome)
listaNome.forEach((a, index)=>{
    carregarFeed(listaNome[index], productsList[i].PrecoComDesconto, productsList[i].Preco, 4)
})

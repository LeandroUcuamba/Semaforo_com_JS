const img = document.getElementById('img');
const buttons = document.getElementById('buttons');

const trafficLight = ( event ) => {
    turnOn[event.target.id](); //pega o nome do id de forma automatica;
}

const turnOn = {
    'red': () => img.src = './img/vermelho.png', 
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png'
}

buttons.addEventListener('click', trafficLight);
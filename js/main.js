const pet = document.querySelector('#pet');
const pontosDisplay = document.querySelector('#pontos');
const alimentarBtn = document.querySelector('#alimentarBtn');
const brincarBtn = document.querySelector('#brincarBtn');
const dormirBtn = document.querySelector('#dormirBtn');
const historicoLista = document.querySelector('#historico');

// status
const fomeDisplay = document.querySelector('#fome');
const diversaoDisplay = document.querySelector('#diversao');
const energiaDisplay = document.querySelector('#energia');

let pontos = 0;
let fome = 100;
let diversao = 100;
let energia = 100;

function addHistorico(text){
    const li = document.createElement('li');
    li.textContent = text;
    historicoLista.appendChild(li);
}

// Atualizar status na tela
function atualizarStatus() {
    fomeDisplay.textContent = fome;
    diversaoDisplay.textContent = diversao;
    energiaDisplay.textContent = energia;
    pontosDisplay.textContent = pontos;
}

// Verificar fim de jogo
function verificarGameOver() {
    if (fome <= 0 || diversao <= 0 || energia <= 0) {
        clearInterval(timer);
        pet.innerText = '💀';
        addHistorico("Seu pet não aguentou 😢");
        alimentarBtn.disabled = true;
        brincarBtn.disabled = true;
        dormirBtn.disabled = true;
    }
}

// Reduz status com o tempo
const timer = setInterval(() => {
    fome -= 2;
    diversao -= 1;
    energia -= 1;

    limitarStatus();
    atualizarStatus();
    verificarGameOver();
}, 3000); 

// Botões
alimentarBtn.addEventListener('click', function(){
    pet.innerText = '😋';
    fome += 10;
    pontos += 1;
    limitarStatus();
    addHistorico('Comeu!');
    atualizarStatus();
});

brincarBtn.addEventListener('click', function(){
    pet.innerText = '😄';
    diversao += 15;
    energia -= 5;
    pontos += 2;
    limitarStatus();
    addHistorico('Brincou!');
    atualizarStatus();
});

dormirBtn.addEventListener('click', function(){
    pet.innerText = '😴';
    energia += 20;
    fome -= 5;
    pontos += 3;
    limitarStatus();
    addHistorico('Dormiu!');
    atualizarStatus();
});

//limitar os status
function limitarStatus() {
    fome = Math.min(fome, 100);
    diversao = Math.min(diversao, 100);
    energia = Math.min(energia, 100);
}


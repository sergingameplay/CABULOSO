const pet = document.querySelector('#pet');
const pontosDisplay = document.querySelector('#pontos');

const alimentarBtn = document.querySelector('#alimentarBtn');
const brincarBtn = document.querySelector('#brincarBtn');
const dormirBtn = document.querySelector('#dormirBtn');

const historicoLista = document.querySelector('#historico');

function addHistorico(text){
    const li = document.createElement('li');
    li.textContent = texto;
    historicoLista.appendChild(li);
}

let pontos = 0;

//alimentar
alimentarBtn.addEventListener('click', function(){
    pet.innerText = '😝';
    pontos +=1;
    pontosDisplay.textContent = pontos;
    addHistorico('comeu!')
});
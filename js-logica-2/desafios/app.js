//Desafio 1

//2
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

//3

function botaoClicado(){
    console.log('O botão foi clicado');
}

//4
function euAmoJS(){ 
    alert('Eu amo JS');
}

//5
function perguntaCidade(){
    let cidadeBrasil = prompt('Fale o nome de uma cidade do brasil:');
    alert(`Estive em ${cidadeBrasil} e lembrei de você.`);
}

//6
function soma(){
    let numero1 = prompt('Digite um número:');
    let numero2 = prompt('Digite outro número:');
    let soma = Number(numero1) + Number(numero2);
    alert(`A soma entre ${numero1} e ${numero2} é igual a ${soma} `)
}

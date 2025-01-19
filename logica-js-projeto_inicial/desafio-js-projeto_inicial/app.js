
/* Desafio 1 */

/*1*/
alert("Boas vindas ao nosso site!");

/*2*/
let nome = "Lua";

/*3*/
let idade = 25;

/*4*/
let numeroDeVendas = 50;

/*5*/
let saldoDisponivel = 1000;

/*6*/
alert("Erro! Preencha todos os campos");

/*7*/
let mensageDeErro = "Erro! Preencha todos os campos";
alert(mensageDeErro);

/*8*/
let nome1 = prompt("Digite seu nome:");

/*9*/
let idade1 = prompt("Digite sua idade:");

/*10*/
if(idade1 >= 18){
    alert("Pode tirar a habilitação!");
}

/* Desafio 2 */

/*1*/
let diaSemana = prompt("Que dia da semana é hoje? ");

if(diaSemana == "sabado" || diaSemana == "domingo"){
    alert("Bom fim de semana");
}else{
    alert("Boa semana");
}

/*2*/
let numero = prompt("digite um número");

if(numero > 0){
    alert("Número positivo")
}else{
    alert("Número negativo")
}

/*3*/
let pontuacao = prompt("Digite sua pontuação")

if(pontuacao >= 100){
    alert("Parabéns, você venceu!")
}else{
    alert("Tente novamente para ganhar")
}

/*4*/
let saldo = 500
alert(`Seu saldo é de R$ ${saldo}.`)

/*5*/
let nome2 = prompt("Digite seu nome:")
alert(`Seja bem vindo ${nome2}!`)
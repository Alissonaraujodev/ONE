alert ("Boas vindas ao jogo do número secreto.");
numeroMax = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);

let chute;
let tentativas = 1;


while(chute != numeroSecreto){
   chute = prompt(`Escolha um número entre 1 e ${numeroMax}`);
   
   if(chute == numeroSecreto){
    break;
    }else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}
//operador ternario "simplificação do if else"
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);




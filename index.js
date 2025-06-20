// Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**
// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// Objetivo
// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói,
// depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000 = Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// Saída
// Ao final deve se exibir uma mensagem:
// "O Herói de nome {nome} está no nível de {nivel}"

let nomeHeroi = "Shuri";
let quantidadeXp = 10000;
let nivel = "";

if (quantidadeXp < 1000) {
  nivel = "Ferro";
} else if (quantidadeXp >= 1001 && quantidadeXp <= 2000) {
  nivel = "Bronze";
} else if (quantidadeXp >= 2001 && quantidadeXp <= 5000) {
  nivel = "Prata";
} else if (quantidadeXp >= 5001 && quantidadeXp <= 7000) {
  nivel = "Ouro";
} else if (quantidadeXp >= 7001 && quantidadeXp <= 8000) {
  nivel = "Platina";
} else if (quantidadeXp >= 8001 && quantidadeXp <= 9000) {
  nivel = "Ascendente";
} else if (quantidadeXp >= 9001 && quantidadeXp <= 10000) {
  nivel = "Imortal";
} else if (quantidadeXp >= 10001) {
  nivel = "Radiante";
}

console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}!`)
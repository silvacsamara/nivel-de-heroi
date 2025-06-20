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
console.log("Só porque algo funciona, não significa que não possa ser melhorado!")
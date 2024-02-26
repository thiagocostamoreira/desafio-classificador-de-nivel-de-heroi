// Variável para armazenar o nome e experiência do herói
let nomeDoHeroi = "Fulano";
let experienciaDoHeroi = 5000;

// Estrutura de decisão para determinar o nível com base na experiência
let nivelDoHeroi;
if (experienciaDoHeroi < 1000) {
    nivelDoHeroi = "Ferro";
} else if (experienciaDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (experienciaDoHeroi <= 3000) {
    nivelDoHeroi = "Prata";
} else if (experienciaDoHeroi <= 4000) {
    nivelDoHeroi = "Ouro";
} else if (experienciaDoHeroi <= 5000) {
    nivelDoHeroi = "Platina";
} else if (experienciaDoHeroi <= 6000) {
    nivelDoHeroi = "Diamante";
} else if (experienciaDoHeroi <= 8000) {
    nivelDoHeroi = "Ascendente";
} else if (experienciaDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

// Exibindo o resultado
console.log(nomeDoHeroi + " atingiu o nível " + nivelDoHeroi + " com " + experienciaDoHeroi + " pontos de experiência.");

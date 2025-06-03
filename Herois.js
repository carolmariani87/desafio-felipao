// Meu Primeiro Desafio de Lógica de Programação

// Criação de variável
let nomeHeroi = "Gandalf Segundo";
let xp = 7800;

// Estrutura para classificar o nível
let nivel;

if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante"; // Agora usando apenas else no final
}

// Saída
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);

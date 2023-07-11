const atacante = prompt("Qual o nome do personagem atacante");
const poderDeAtaque = prompt("Insira o poder de ataque do personagem");

const defensor = prompt("Qual o nome do defensor");
let pontosDevida = prompt("Quantos pontos de vida tem o defensor?");
const poderDeDefesa = prompt("Qual o poder de defesa do defensor?");
const possuiEscudo = prompt("Ele possui um escudo? (sim/não)");

let danoCausado = 0;

if (
  poderDeAtaque > poderDeDefesa &&
  possuiEscudo.toLocaleLowerCase() === "não"
) {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (
  poderDeAtaque > poderDeDefesa &&
  possuiEscudo.toLocaleLowerCase() === "sim"
) {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}

pontosDevida -= danoCausado;

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor);
alert(
  atacante +
    ": " +
    "\nPoder de ataque: " +
    poderDeAtaque +
    "\n\n" +
    defensor +
    ": " +
    "\nPontos de vida: " +
    pontosDevida +
    "\nPoder de defesa: " +
    poderDeDefesa +
    "\nPossui escudo: " +
    possuiEscudo
);

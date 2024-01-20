const readlineSync = require('readline-sync');

let v = 0;
let d = 0;

while (true) {
    const jogador = parseInt(readlineSync.question('Digite um valor: '));
    const computador = Math.floor(Math.random() * 21);
    const total = jogador + computador;
    let tipo = " ";
    let xResult = " ";

    while (!["P", "I"].includes(tipo)) {
        tipo = readlineSync.question("Par ou Ímpar? [P/I]: ").trim().toUpperCase()[0];
    }

    console.log(`Você jogou ${jogador} e o computador ${computador}. Total de ${total}.`, end='');

    if (total % 2 === 0) {
        console.log('Deu par.');
    } else {
        console.log('Deu ímpar.');
    }

    if ((tipo === "P" && total % 2 === 0) || (tipo === "I" && total % 2 === 1)) {
        console.log("Você venceu");
        v++;
        //Game()
    } else {
        console.log("Você perdeu");
        console.log("você venceu " + xResult + "vezes")
        d++
    }
    
    const jogarNovamente = readlineSync.keyInYNStrict("Vamos jogar novamente?");
    
    if (!jogarNovamente) {
        break;
    }
   
}

function calcularRank(vitorias, derrotas) {
    const saldoRankeadas = vitorias - derrotas;
    let resultado = '';

    if (vitorias < 10) {
        resultado = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        resultado = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        resultado = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        resultado = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        resultado = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        resultado = 'Lendário';
    } else {
        resultado = 'Imortal';
    }

    console.log(`Com um saldo de Rankeadas de ${saldoRankeadas}, o jogador alcançou o ranking: ${resultado}`);
    return resultado;
}

// Exemplo de uso:
const vitorias = v-d;
const derrotas = d;
calcularRank(vitorias, derrotas);







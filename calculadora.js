saldoRankeadas(80, 10);

function saldoRankeadas(qtdVitorias, qtdDerrotas) {
    let saldoVitorias = (qtdVitorias - qtdDerrotas);

    if (saldoVitorias <= 10) {
        let nivel = "Ferro";
        console.log("O Heroi tem saldo de vitorias igual a " + saldoVitorias + " e esta no nivel de " + nivel + "!");

    } else if ((saldoVitorias >= 11) && (saldoVitorias <= 20)) {
        let nivel = "Bronze";
        console.log("O Heroi tem saldo de vitorias igual a " + saldoVitorias + " e esta no nivel de " + nivel + "!");
    
    } else if  ((saldoVitorias >= 21) && (saldoVitorias <= 50)) {
        let nivel = "Prata";
        console.log("O Heroi tem saldo de vitorias igual a " + saldoVitorias + " e esta no nivel de " + nivel + "!");
    
    } else if  ((saldoVitorias >= 51) && (saldoVitorias <= 80)) {
        let nivel = "Ouro";
        console.log("O Heroi tem saldo de vitorias igual a " + saldoVitorias + " e esta no nivel de " + nivel + "!");
    } else if  ((saldoVitorias >= 81) && (saldoVitorias <= 90)) {
        let nivel = "Diamante";
        console.log("O Heroi tem saldo de vitorias igual a " + saldoVitorias + " e esta no nivel de " + nivel + "!");
    } else if  ((saldoVitorias >= 91) && (saldoVitorias <= 100)) {
        let nivel = "Lendario";
        console.log("O Heroi tem saldo de vitorias igual a " + saldoVitorias + " e esta no nivel de " + nivel + "!");
    } else if  (saldoVitorias >= 101){
        let nivel = "Imortal";
        console.log("O Heroi tem saldo de vitorias igual a " + saldoVitorias + " e esta no nivel de " + nivel + "!");
    } else {
        console.log("O Nivel nao foi identificado, digite um valor valido");
    }
}





/*
Desafio 01
Alguns números inteiros positivos n possuem uma propriedade na qual a soma de n + reverso(n) resultam em números 
ímpares. 

Por exemplo, 36 + 63 = 99 e 409 + 904 = 1313. Considere que n ou reverso(n) não podem começar com 0.

Existem 120 números reversíveis abaixo de 1000.

Construa um algoritmo que mostre na tela todos os números n onde a soma de n + reverso(n) resultem em números ímpares 
que estão abaixo de 1 milhão.
*/


// VARIAVEIS
let numeroReversos = [];
let resultadoFinal = 0;

// FUNCAO PARA VERIFCAR QUANTOS VEZES REPETIU O NUMERO IMPAR.
function main() {
    let index = 0;
    let count = 0;

    while (resultadoFinal < 300000) {
        if (verificaSeNumeroReverso(index)) {
            numeroReversos.push(index);
            count++;
        }
        index++;
    }
    console.log(count);
}

// FUNCAO PARA TER O REVERSO DO NUMERO
function verificaSeNumeroReverso(number) {

    let numString = number.toString();
    if (verificarSeComecaComZero(numString)) return false

    numString = numString.split('');
    numString = numString.reverse('');
    numString = numString.join('');

    //REALIZADO O REVERSO DO NUMERO.

    if (numeroReversos.findIndex(n => n == number || n == parseInt(numString)) !== -1) {
        return false;
    }
    if (verificarSeComecaComZero(numString)) return false

    resultadoFinal = number + parseInt(numString);
    if (resultadoFinal % 2 !== 0) {
        //console.log("Somando o numero " + number + " + " + parseInt(numString) + " = " +resultadoFinal);
    }
    return resultadoFinal % 2 !== 0;

    // VERIFICADO SE RESULTADO FINAL E IMPAR.
}

// FUNCAO PARA VERIFICAR SE O NUMERO NAO COMEÇA COM '0'
function verificarSeComecaComZero(number) {
    return number.startsWith('0');
}
main()
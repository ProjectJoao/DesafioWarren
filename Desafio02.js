/*
Desafio 02
Um professor de programação, frustrado com a falta de disciplina de seus alunos, 
decidi cancelar a aula se menos de x alunos estiverem presentes quando a aula for iniciada.
O tempo de chegada varia entre:

Normal: tempoChegada <= 0
Atraso: tempoChegada > 0
Construa um algoritmo que dado o tempo de chegada de cada aluno e o limite x de alunos presentes, 
determina se a classe vai ser cancelada ou não("Aula cancelada” ou “Aula normal”).

Exemplo:

    Entrada de dados:
    x = 3
tempoChegada = [-2, -1, 0, 1, 2]

Saída de dados:
    Aula normal.

    Explicação:
    Os três primeiros alunos chegaram no horário.Os dois últimos estavam atrasados.
    O limite é de três alunos, portanto a aula não será cancelada.
*/

/// ENTRADA DE DADOS
let tempodeChegada = [-2, -2, 5, 6, 4, 0];
let chegaram = 0;
let atrasados = 0;
let limiteAluno = 3;

//Loop para descobrir quais sao os valores negativos no Array[tempoChegada]
for (i = 0; i < tempodeChegada.length; i++) {
    if (tempodeChegada[i] > 0) {
        chegaram++;
    } else {
        atrasados++;
    }
}

/// CONDICAO PARA DESCOBRI SE VAI TER AULA OU NAO
if (chegaram == limiteAluno || chegaram > limiteAluno) {
    console.log(`Aula Normal `);
    console.log(`Atrasados: ` + atrasados);
    console.log(`No horario: ` + chegaram);
    console.log(`Limite de Aluno: ` + limiteAluno);
}
else {
    console.log(`Aula Normal `);
    console.log(`Atrasados: ` + atrasados);
    console.log(`No horario: ` + chegaram);
    console.log(`Limite de Aluno: ` + limiteAluno);
}




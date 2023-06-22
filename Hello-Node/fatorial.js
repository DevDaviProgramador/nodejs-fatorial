/*
* 4)- Faça um script com nodejs que calcule o fatorial de um número;

* FATORIAL= Uma multiplicação onde um número inteiro é multiplicado por todos os seus
* números inteiros anteiores a ele

Exemplo prático "FATORIAL"

*                        !1 = 1
*                !2 = 2 * 1 = 2
*            !3 = 3 * 2 * 1 = 6
*       !4 = 4 * 3 * 2 * 1 = 24
*   !5 = 5 * 4 * 3 * 2 * 1 = 120

*/
var readLineSync = require('readline-sync');

function fatorial(n) {
    if(n==1) return 1;
/*  console.log("Fatorial de" + n + "=" + n + "* !" +(n - 1)) */
    return n * fatorial(n - 1);
}

console.log(fatorial(1));

var numero = readLineSync.question('qual seria o numero? ');
console.log (fatorial(numero));

/* Davi para utilizar o terminal é necessario entrar na pasta correta por
* "cd "C:\Users\Guilherme\OneDrive\Área de Trabalho\Workspace\projetos 2023\atividades javascript 3.1\Hello-Node""
* após utilizar no terminal o comando "node fatorial.js" 
* Após o terminal lhe perguntara "qual ├® o n├║mero?" pois você ainda não sabe concertar isso
* Por ultimo digitar o número que deseja ter o Fatorial calculado*/
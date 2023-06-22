var readLineSync = require('readline-sync');

//aguarda pela resposta do usuário

var nome = readLineSync.question('qual é teu nome?');
console.log ('oi' + nome + '!');
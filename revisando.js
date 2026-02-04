//Exemplo Function expression
const somar = function(a,b){
    return a + b;
}
console.log(somar(1,2));

//Exemplo arrow function
const somar2 = (a,b) => a+b
console.log(somar2(5,5))

//Exemplo arrow function
const quadrado = a => a * a;
console.log(quadrado(12))

//Exemplo IIFE
var material = 'Caderno';

(function() {
  var material = 'Caneta';
  console.log(material);
})();
console.log(material)

//Exemplo variavéis privadas
function criarPessoa(nome, sobrenome) {
  const nomeCompleto = `${nome} ${sobrenome}`;

  function andar() {
    return `${nomeCompleto} andou`;
  }
  function nadar() {
    return `${nomeCompleto} nadou`;
  }
  return {
    nome,
    sobrenome,
    andar,
    nadar,
  }
}

const designer = criarPessoa('Marcela', 'Albuquerque');
console.log(designer)
console.log(designer.andar())
console.log(designer.nadar())

//Exemplo Ice factory
'use strict';

function criarPessoa2(nome, sobrenome) {
  const nomeCompleto2 = `${nome} ${sobrenome}`;
  function andar() {
    return `${nomeCompleto2} andou`;
  }
  return Object.freeze({
    nome,
    sobrenome,
    andar,
  });
}

const designer2 = criarPessoa2('Paloma', 'Albuquerque');
console.log(designer2)
console.log(designer2.andar())
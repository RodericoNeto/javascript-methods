var carro = new Object();

carro.modelo = "Uno";
carro.ano = 1999;
carro.transmissao = "cvt";

console.log(carro)

// Lista todos os nomes dos atributos dos objetos (Obs: retorna os valores dentro de um array)
console.log(Object.keys(carro))

// Lista todos os VALORES dos atributos dos objetos (Obs: retorna os valores dentro de um array)
console.log(Object.values(carro))
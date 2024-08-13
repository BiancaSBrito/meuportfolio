var arr1 = [-5, 10, 15, 20, -3, 89];

var arr2 = [1,2,3,4,5,6,7];

console.log("Posição do numero 3: " + arr1.indexOf(3));

arr1.push(7);

console.log(arr1);

arr1.pop();

console.log(arr1);

arr2.splice(1,1);

console.log(arr2);

var nomes = ["Maria", "João", "Pedro", "Lucas"];
var novos = nomes.splice(1,2,"Luiz","Ronaldo");
console.log(nomes);

var pais = ["Brasil", "Argentina", "Colombia"];
pais.unshift("Uruguai");
console.log(pais);


var pessoa = ["Eduardo","Joana", "Wallace","Rosana"];
var gerente = ["Davi","Manuela"];

var pessoas1 = pessoa.slice(1,3);

console.log(pessoa);
console.log(pessoas1);

var empresa = pessoa.concat(gerente);

console.log(empresa);
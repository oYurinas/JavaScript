let nome = prompt ('Digite seu nome: ');
let sobrenome = prompt ('Digite seu sobrenome:');
let idade = prompt ('Digite sua idade:');
let ID = Math.floor(Math.random() * 20); //gerador de numero aleatorio (math.random) //arredondar numero math.floor

console.log(ID);
console.log(`Ola, ${nome} ${sobrenome}, voce tem ${idade} anos e seu ID eh ${ID}`);
alert(`Ola, ${nome} ${sobrenome}, voce tem ${idade} anos e seu ID eh ${ID}`);
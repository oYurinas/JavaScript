//campo de dados do usuario
const nome = prompt ('Digite seu nome: ')
const anoNascimento = parseInt(prompt('Digite seu ano de nascimento: '))
let salario = parseFloat(prompt('Informe seu salario mensal: '))
let quantFilhos = parseInt(prompt ('Informe a quantidade de filhos que voce tem: '))

//campo de manipulação
let idade = 2023 - anoNascimento
let aposento = ((70 - idade) * 12 ) * salario
let divAposento = salario / quantFilhos

//resultado console/tela
let mensagem = `Ola, ${nome}, tudo bem ?\n Voce tem ${idade} anos de idade, seu salario eh R$ ${salario.toFixed(2)} e recebera ${aposento.toFixed(2)} ate se aposentar
Caso voce deseja dividir seu salario entre os seus filhos, dara R$ ${divAposento.toFixed(2)} para cada um`
console.log(mensagem)
alert (mensagem)
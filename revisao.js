// Numeros:
const preco = 29.90 // numero decimal
const quantidade = 3 // numero inteiro
const desconto = 0.15 // porcentagem com decimal


// Operadores Atitméticos:
const soma = 10 + 5; // 15
const subtracao = 10 - 3; // 7
const multiplicacao = 4 * 3; // 12
const divisao = 15 / 3; // 5
const resto = 17 % 5; // 2
const potencia = 2 ** 3; // 8 (2 elevado a 3) ou 2 * 2 * 2

// Ordens de precedencia (PEMDAS)
const resultado = 3 + 4 * 2; // 11
const comParenteses = (3 + 4) * 2; // 14

//Operadores de Atribuição:
let pontos = 100;
pontos += 50; // 150
pontos -= 20; // 130
pontos *= 2; // 260
pontos /= 4; // 65

// Incremento e Decremento
let contador = 5;
contador ++; // 6
contador --; // 5

// Arredondamentos
preco
Math.floor(preco); // 29
Math.ceil(preco); // 30
Math.round(preco); // 30

// Arrays
const avaliacoes = [5, 4, 5, 3, 4];
const produtos = ["Pizzas", 'Bebidas', `Entradas`]
const misto = ['texto', true, 3.14];

console.log(avaliacoes[0]) //5
console.log(avaliacoes[2]) //5

console.log(avaliacoes.length) //5

avaliacoes[1] = 5;
avaliacoes.push(4);
const ultimo = avaliacoes.pop(); //remover e retorna o ultimo item
const primeiro = avaliacoes.shift() //remover e retorna o primeiro item


//Strings
const nome = "Pizzaria do Luan";
const descricao = "Aqui quem faz o preço é você";
const endereco = "Onde o vento faz a curva";

//acessando caracteres
console.log(nome[0]); //P
console.log(nome.length) //16

//metodos útieis
console.log(nome.toUpperCase()); //Tudo maiusculo
console.log(nome.toLowerCase()); // Tudo minusculo
console.log(nome.includes('João')); // False
console.log(nome.startsWith('Pizza')) //True
console.log(nome.slice(0, 8)); //'Pizzaria '

// Concatenação
const saudacao = 'Ola, ' + nome + '!'; //Ola, Pizzaria do Luan!
const saudacao2 = `Ola, ${nome}!`; //Ola, Pizzaria do Luan!

//Templete string, exemplo:
const menu = `
Cardápio:
- Pizza Margherita: R$: 25,00
- Pizza Calabresa: R$: 25,00
- Refrigerante: R$: 8,00
`

// Booleanos e logicas
const estaAberto = true;
const TemDesconto = false;
const maiorIdade = 25 > 18; //true

//Operadores logicos
const podeComprar = maiorIdade && temDinheiro;
// true e true = true

const podeEntrar = temConvite || E_o_dono;
// true e false = true
// false e true = true

const naoEstaAberto = !estaAberto;
// negando o valor
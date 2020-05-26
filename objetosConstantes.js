//pessoa -> 123 -> {...}
const pessoa = { nome: 'joão' }
pessoa.nome = 'pedro'
console.log(pessoa);

//pessoa <- 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

//tentando mudar o objeto após o congelamento do freeze
pessoa.nome = 'maria'
console.log(pessoa);

const pessoaConstante = Object.freeze({nome: 'Maria'})
pessoaConstante.nome = 'teste'
console.log(pessoaConstante);

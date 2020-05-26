//Object.preventExtensions(deleta atributos mas não inclui)
const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensível: ', Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto);

//Object.seal(não deleta nem inclui)
const pessoa = { nome: 'tony', idade: 35 }
Object.seal(pessoa)
console.log('selado', Object.isSealed(pessoa))


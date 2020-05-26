//colegação dinâmica de par chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto.preco = 220

console.log(produto);

delete produto.preco
console.log(produto);

const carro  = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [
    {
        nome: 'joão',
        idade: 19
    },
    {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        //...
    } 
}

carro.proprietario.endereco.numero = 1000
//outra forma de acessar
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
console.log(carro)

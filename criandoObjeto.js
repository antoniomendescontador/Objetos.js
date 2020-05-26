//usando a forma literal
const obj1 = {

}
console.log(obj1)

//object em js
console.log(typeof Object, typeof new Object);

const obj2 = new Object
console.log(obj2);

//funções construtora
function Produto(nome, preco, desconto){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }    
}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.52, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//função factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joao', 8700, 4)
const f2 = criarFuncionario('maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario());

//object.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha); 

//função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info":"Sou um JSON"}');
console.log(fromJSON.info);

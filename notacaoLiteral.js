const a = 1
const b = 2
const c = 3

//antigamento como era feito 
const obj1 = { a: a, b: b, c: c }

//como é atualmente
const obj2 = { a, b, c }
console.log(obj1, obj2);

const nomeAttr = 'nota'
const valorAttr = 9.99

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3);

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4);

const obj5 = {
    funcao1: function () {
        //...
    },
    funcao2(){
        //...
    }
}

console.log(obj5);

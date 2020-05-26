const obj = {a: 1, b: 2, c:3, soma(){return a+b+c}}
console.log(JSON.stringify(obj))//de obj para json

console.log(JSON.parse('{"a":1, "b":2}')) //de json para obj
console.log(JSON.parse('{"a":1, "b":"string", "c": true, "d": {}, "e":[]}')) //de json para obj



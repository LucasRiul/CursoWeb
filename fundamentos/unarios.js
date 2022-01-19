let num1 = 1
let num2 = 2 

num1++
console.log(num1)

--num1
console.log(num1)

console.log(++num1 === num2--)
//no pré fixado ele incrementa antes da comparação, e no pós fixado somente depois
console.log(num1 === num2)
//deixe o seu código o mais simples possível
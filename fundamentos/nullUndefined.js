let valor //não inicializada

console.log (valor)


valor = null //não tem valor nem tem endereço, não aponta para nada, mas foi definida
//console.log(valor.toString()) //erro

const produto = {}
console.log(produto.preco) // preco não definido

console.log(produto)
produto.preco = 3.5
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco = tirar atributo

console.log(produto)

produto.preco = null // sem preço

console.log (!!produto.preco)
console.log(produto)



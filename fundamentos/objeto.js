const prod1 = {}
prod1.nome = 'celular ultra mega'
//objeto é uma coleção de chave valor, identificar como objeto e dar um valor pra ele, dá pra ter um objeto dentro do outro
prod1.preco = 4998.80
prod1['Desconto Legal']=0.4 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'camisa polo',
    preco: 79.9,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
console.log(prod2)
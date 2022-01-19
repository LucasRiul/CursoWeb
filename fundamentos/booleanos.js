let isAtivo = false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)

isAtivo = 1

console.log(!!isAtivo)// ! é negação

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])//array
console.log(!!{})//objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log('os falsos...\n\n')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(('' || null || 0 || 'oba' || 123))//retorna o primeiro valor verdadeiro
console.log(!!('' || null || 0 || 'oba' || 123))

let nome = ''

console.log(nome||'Desconhecido')



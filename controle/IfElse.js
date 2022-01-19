const imprimirResultado = function (nota) {
    if (nota >= 7 ) {
        console.log('Aprovado!')
    }
    else if (nota < 7){
        console.log('Reprovado!')
    }
    else {
        console.log('Valor inválido')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') //cuidado!!
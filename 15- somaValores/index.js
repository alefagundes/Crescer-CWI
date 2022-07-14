const geraValor = (number) => {
    let values = []
    for (let i = 0; i < number; i++) {
        values[i] = Math.floor(Math.random() * 1000)
    }
    console.log(` ${values}`)
    return values
    ///gera valores aleatorios inteiros, caso necessite ser valores de ponto flutuante, retire o floor e no fim
    //da expressao use .toFix(number) => number é igual a quantas casas vc vai utilizar do valor de ponto flutuante
}

const somaValores = (array) => {
    let sum = 0
    array.forEach((e) => {
        sum += e
    })
    console.log(sum)
    //percore e imprime
}

somaValores(geraValor(20))

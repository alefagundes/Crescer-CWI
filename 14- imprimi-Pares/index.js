const geraArray = () => {
    // muito chato gerar 15 valores a mao, entao gerei uma funcao que vai gerar randoico e inserir ao array;

    for (let i = 0; i < 15; i++) {
        numbers[i] = Math.floor(Math.random() * 100)
        //utilizai o math.floor para arredondar valores pq se for valor com . flutuante ja nao eh um numero par
    }
    //gera valores aleatorios para meu array de numberos de 0 a 100
    console.log(` ${numbers}`)
    return numbers
}

const printParNumber = (array) => {
    //mapeio o array e imprimo se for um numero par
    array.map((e) => {
        if (e % 2 === 0) {
            console.log(e)
        }
    })
}

// chamo a funcao de printar os valores e dentro dela chamo o funcao secundaria de geração que retorna um array
printParNumber(geraArray())

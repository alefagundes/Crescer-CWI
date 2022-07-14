const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

const calc = (arr) => {
    let sumDiagLeft = 0
    let sumDiagRight = 0
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz.length)
        sumDiagLeft += matriz[i][i]
        sumDiagRight += matriz[i][matriz.length - 2]
    }
    console.log(sumDiagLeft)
    console.log(sumDiagRight)
}

calc(matriz)

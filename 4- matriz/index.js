const matriz = []

for (let i = 0; i < 10; i++) {
    matriz[i] = new Array(10)
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        matriz[i][j] = Math.floor(Math.random() * 10)
    }
}

const ordem = (arr) => {
    arr.map((e) => e.sort())
    return arr
}

/* console.log(matriz)
ordem(matriz) */
const teste = ordem(matriz)

teste.map((e) => {
    console.log(' ' + e)
})

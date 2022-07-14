const validaPrimo = (value) => {
    for (let i = 2; i < value; i++) {
        if (value % 2 === 0) {
            return false
            //nao eh primo
        }
    }
    return true
}
const teste = validaPrimo(4)
console.log(teste)

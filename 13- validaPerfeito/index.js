const validaNumber = (number) => {
    let sum = 0
    let divisibles = []
    for (let i = 1; i <= number - 1; i++) {
        if (number % i === 0) {
            divisibles.push(i)
        }
    }
    divisibles.map((e) => {
        sum += e
    })
    if (sum === number) {
        return true
    } else {
        return false
    }
}

const teste = validaNumber(6)
console.log(teste)

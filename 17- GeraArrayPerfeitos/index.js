const geraValores = (value) => {
    let array = []
    for (let i = 1; i <= value; i++) {
        array.push(i)
    }
    return array
}

const validaNumberPerfect = (number) => {
    let sum = 0
    let arr = []
    for (let i = 0; i < number - 1; i++) {
        if (number % i === 0) {
            arr.push(i)
        }
    }
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    if (sum === number) {
        return true
    } else {
        return false
    }
}

const geraArrayPerfect = (number, num) => {
    let arrFinal = []
    const arr = geraValores(num)
    for (let i = 0; i < arr.length; i++) {
        let valida = validaNumberPerfect(arr[i])
        if (valida === true) {
            arrFinal.push(arr[i])
        }
    }
    for (let i = 0; i < 4; i++) {
        console.log(arrFinal[i])
    }
}

geraArrayPerfect(4, 10000)

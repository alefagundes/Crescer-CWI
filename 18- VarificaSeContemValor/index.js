const geraVetor = () => {
    let arr = []
    for (let i = 0; i < 50; i++) {
        arr[i] = Math.floor(Math.random() * 50)
    }
    console.log(arr)
    return arr
}

const arr = geraVetor()

const confereValor = (num, arr) => {
    const hasOrNot = arr.includes(num)
    console.log(hasOrNot)
}

confereValor(9, arr)

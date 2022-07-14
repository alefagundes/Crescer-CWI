const vet = [4, 3, 7, 6]

function miniMaxSum(arr) {
    let sumMax = 0
    let sumMin = 0
    console.log(arr.sort())
    for (let i = 0; i < arr.length - 1; i++) {
        sumMin += arr[i]
        sumMax += arr[i + 1]
    }
    console.log(sumMin, sumMax)
}

miniMaxSum(vet)

//let arr = [[1, 18], 3, 2, [5, [6, 7]]]

let arr = [[1, 2, 3]]

function fetch(array) {
    let fetchArr = []

    array.forEach((e) => {
        if (Array.isArray(e)) {
            fetchArr = fetchArr.concat(fetch(e))
        } else {
            fetchArr.push(e)
        }
    })

    return fetchArr
}

const teste = fetch(arr)
console.log(teste)

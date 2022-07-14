/* //const foneNumber = [5, 1, 9, 9, 5, 4, 0, 4, 6, 6, 9]
const foneNumber = [5, 1, 9, 5, 4, 0, 4, 6, 6, 9]

const format = (arr) => {
    let telefone
    const baseDecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    const tranform = arr.toString().replaceAll(',', '')
    console.log(tranform)
    console.log(tranform.length)

    if (arr.length > 11 || arr.length < 10) {
        telefone = ''
        return telefone
    }

    arr.map((e) => {
        if (!baseDecimal.includes(e)) {
            telefone = ''
            return telefone
        }
    })

    if (tranform.length === 11) {
        telefone =
            '(' +
            tranform.substring(0, 2) +
            ') ' +
            tranform.substring(2, 7) +
            '-' +
            tranform.substring(7, 11)
        console.log(telefone)
    } else {
        telefone =
            '(' +
            tranform.substring(0, 2) +
            ') ' +
            tranform.substring(2, 6) +
            '-' +
            tranform.substring(6, 10)
        console.log(telefone)
    }

    return telefone
}

const telefone = format(foneNumber)
console.log(`Seu telefone eh: ${telefone}`) */

//Developing the function format develping last moment

const numbers = [5, 1, 9, 9, 5, 4, 0, 4, 6, 6, 9]
//const numbers = [5, 1, 9, 5, 4, 0, 4, 6, 6, 9]

const format = (array) => {
    const tamEsp = /([0-9]{11})|([0-9]{10})/g
    let telefone = array.toString().replaceAll(',', '')
    console.log(telefone)

    if (!tamEsp.test(telefone)) {
        telefone = ''
        return telefone
    } /* else {
        console.log('phone ok')
    } */
    if (telefone.length === 11) {
        return (telefone =
            '(' +
            telefone.substring(0, 2) +
            ')' +
            telefone.substring(2, 7) +
            '-' +
            telefone.substring(7, 11))
    } else {
        return (telefone =
            '(' +
            telefone.substring(0, 2) +
            ')' +
            telefone.substring(2, 6) +
            '-' +
            telefone.substring(6, 10))
    }
}

const teste = format(numbers)
console.log(teste)

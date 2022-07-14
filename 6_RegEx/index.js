const { text } = require('./data')

/* const cpf = '043.076.050-71'

regex cpf = [0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}

const cpfForma = new RegExp()

if (cpfForma.cpf(cpf)) {
    console.log('cpf')
}
 */
/* console.log(cpf.match(form))
const regEx = /Joao/gi

console.log(regEx.test(text))*/

/* const cpf = '043.076.050-71'
const form = /[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}/gi

const regex = /\d/g

console.log(form.test(cpf))
const teste = cpf.match(regex).join('')
console.log(teste) */

//  => /\W/ -> pega somente os caracteres que nao sao alfanumericos EX: ..-

const validaCPF = (str) => {
    const form = /[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}/
    //const reg = /\W/g

    if (form.test(str)) {
        console.log('forma CPF valido')
    } else {
        console.log('forma invalida')
    }
    const junta = str.match(/\W/g).join('')
    console.log(junta)
}

validaCPF('043.076.050-71')

/*
const senha = 'Crerrr12'
//const senha = 'Crescer'
const validaSenha = (str) => {
    const regextra = /[\W]/g
    const regEx = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z]).{8,32}/g

    if (regextra.test(senha)) {
        return 0
    } else if (regEx.test(senha)) {
        return 1
    }
}
const teste = validaSenha(senha)
console.log(teste)

*/
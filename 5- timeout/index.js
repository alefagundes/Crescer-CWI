let segundos = 1

function ContarSegundos() {
    console.log('Já passou ' + segundos + ' segundos...')
    segundos++
}
setInterval(ContarSegundos, 1000)

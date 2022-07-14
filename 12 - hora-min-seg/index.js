const calculaTime = (segundos) => {
    let hora, resto, min, seg
    hora = Math.floor(segundos / 3600)
    resto = segundos % 3600
    min = Math.floor(resto / 60)
    seg = Math.floor(resto % 60)

    return `${hora}:${min}:${seg}`
}

const horario = calculaTime(3672)

console.log(horario)

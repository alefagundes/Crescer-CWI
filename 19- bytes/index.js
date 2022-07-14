const calcValue = (value) => {
    let calculo
    if (value < Math.pow(1024, 1)) {
        console.log(`${value.toFixed(2)} B`)
    } else if (value >= Math.pow(1024, 1) && value < Math.pow(1024, 2)) {
        const v = (calculo = value / Math.pow(1024, 1))
        console.log(`${v.toFixed(2)} KB`)
    } else if (value >= Math.pow(1024, 2) && value < Math.pow(1024, 3)) {
        const v = (calculo = value / Math.pow(1024, 2))
        console.log(`${v.toFixed(2)} MB`)
    } else if (value >= Math.pow(1024, 3) && value < Math.pow(1024, 4)) {
        const v = (calculo = value / Math.pow(1024, 3))
        console.log(`${v.toFixed(2)} GB`)
    } else if (value >= Math.pow(1024, 4) && value < Math.pow(1024, 5)) {
        const v = (calculo = value / Math.pow(1024, 4))
        console.log(`${v.toFixed(2)} TB`)
    } else if (value >= Math.pow(1024, 5) && value < Math.pow(1024, 6)) {
        const v = (calculo = value / Math.pow(1024, 5))
        console.log(`${v.toFixed(2)} PB`)
    } else if (value >= Math.pow(1024, 6) && value < Math.pow(1024, 7)) {
        const v = (calculo = value / Math.pow(1024, 6))
        console.log(`${v.toFixed(2)} EB`)
    } else {
        const v = value / Math.pow(1024, 7)
        console.log(`${v.toFixed(2)} ZB`)
    }
}

console.log(Math.pow(1024, 7))

calcValue(1.1805916207174113e21)
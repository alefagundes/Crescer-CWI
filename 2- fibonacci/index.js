//para sabermos qual numero da sequencia o valor informado pertence

const fibonacci = (num) => {
    if (num === 0 || num === 1) return 1
    if (num === 2) return 2

    return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(5))

//vamos fazer para saber qual a sequencia comepleta ate o valor.

const fibo = (num) => {
    //a sequencia se estarta com o valor 0 e 1 => equivalente arr[0] and arr[1]
    let arrFibo = [0, 1]
    for (let i = 2; i <= num; i++) {
        const element = arrFibo[i - 2] + arrFibo[i - 1]
        arrFibo.push(element)
    }
    return arrFibo
}

console.log(fibo(8))

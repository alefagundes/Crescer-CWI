const calcMedia = (not1, not2, not3, desisao) => {
    let media = 0
    if (desisao === 'a' || desisao === 'A') {
        media = (not1 + not2 + not3) / 3
        return media
    } else if (desisao === 'P' || desisao === 'p') {
        media = (1 * not1 + 2 * not2 + 3 * not3) / (not1 + not2 + not3)
        return media
    }
}

const teste = calcMedia(5, 3, 3, 'P').toFixed(2)

console.log(teste)

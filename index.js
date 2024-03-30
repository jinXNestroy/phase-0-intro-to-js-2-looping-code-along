let arrMessages = ["Saka", "Odegaard", "Jesus"]

function writeCards(arr, event) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return newArr

}

function countDown(integer) {
    let i = integer
    while (i >= 0) { console.log(i--) }
}
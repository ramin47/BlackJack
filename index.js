
let cards = []
let sum = 0
let messages = ""
let isAlive = false
let hasBlack = false
let messagesEl = document.getElementById("messages-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")

console.log(cards)

function getRandomCard() {
  
    let randomNumber = Math.floor( Math.random() * 13) + 1
    
    if(randomNumber > 10) {
        return 10
    } else if(randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let fnum = getRandomCard()
    let snum = getRandomCard()
    cards = [fnum, snum]
    sum = fnum + snum
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        messages = "Do you want to draw a card?"
    } else if (sum === 21) {
        messages = "You won!"
        hasBlack = true
    } else {
        messages = "You are out of the game!"
        isAlive = false
    }
    messagesEl.textContent = messages
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 

    for (count = 0; count < cards.length; count += 1) {
        cardsEl.textContent += cards[count] + " "
    }
}


function newCard() {
    if (isAlive === true && hasBlack === false) {
    
    let third = getRandomCard()
    sum += third
    console.log(cards)
    cards.push(third)
    renderGame()
}
}
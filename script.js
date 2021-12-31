// (global) variables
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



// (global) objects
let player = {
    name: "Yin Chu",
    chips: 150
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips



// function to get a new random card and assign it a value
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}



// function to start the game
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}



// function that contains the 'actual' game
function renderGame() {
    cardsEl.textContent = "Cards: " 

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack."
        hasBlackjack = true
    } else {
        message = "You're out of the game."
        isAlive = false
    }

    messageEl.textContent = message
}



// function to get a new random card
function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card) // 2:52:59
        renderGame()
    }
}




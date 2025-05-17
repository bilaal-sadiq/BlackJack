let firstCard = 9
let secondCard = 7
let cards = [firstCard, secondCard]


let sum = firstCard + secondCard


let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}


function renderGame() {

    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card"
        
    } 
    else if (sum === 21) {
        message = "Wohoo! You've got a blackjack"
        hasBlackJack = true
    } 
    else {
        message = "You're out the game"
        isAlive = false
    }

    messageEl.textContent = message

}

function newCard() {
   let card = 2
   sum += card
   cards.push(card)
   renderGame()
}


// let messages = [
//     "Hey how is it going",
//     "i'm great thank you",
//     "All good. Been working"
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)

// messages.pop()

// console.log(messages)



for (let count = 10; count <= 100; count +=10)
{
    console.log(count)

}    




    
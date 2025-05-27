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

   
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " " 
    }


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

// How to write for loop with arrays and DOM element. 

// let sentence = ["Hello","My","Name","is","Bilaal" ]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i <= sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
// }




    
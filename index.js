// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")




function getRandomCard() {
    let cardNumber = Math.floor(Math.random() * 13) + 1
    if (cardNumber > 10) {
        return 10
    } else if (cardNumber === 1) {
        return 11
    } else {
        return cardNumber
    }
    
}



function startGame() {
    let isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard


    renderGame()
}


function renderGame() {

   cardsEl.textContent = "Cards: "
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
   let card = getRandomCard()
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




// Change start game bug so it loads only two numbers at a time and doesn't mutiply

// let player1Time = 102
// let player2Time = 107

// function getTotalRacetime() {
//     return player1Time + player2Time
// }

// let totalTime =  getTotalRacetime()

// console.log(totalTime)






// function rollDice() {
//     let flooredNumber = Math.floor(Math.random() * 6) + 1
//     return flooredNumber
// }

// console.log(rollDice())

let likesDocumentaries = false
let likesStartups = true 

if (likesDocumentaries || likesStartups) {
    recommendMovie()
}



function recommendMovie() {
    console.log("Hey, Check out this new film we think you will like!")
}
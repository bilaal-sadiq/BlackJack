let firstCard = 9
let secondCard = 7


let sum = firstCard + secondCard


let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {

    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
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
   console.log("Drawing out a new card") 

   let card = 2
   sum += card

   startGame()
}








    
let firstCard = 10
let secondCard = 7

let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true
let message = ""





function startGame() {
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

    console.log(message)
}



    
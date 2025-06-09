let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Per",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips



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
    if (isAlive === true && hasBlackJack === true) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
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

// let likesDocumentaries = false
// let likesStartups = true 

// if (likesDocumentaries || likesStartups) {
//     recommendMovie()
// }



// function recommendMovie() {
//     console.log("Hey, Check out this new film we think you will like!")
// }

// let airBnb = {
//     name: "Medival Hotel",
//     price: 190,
//     avaliable: false,
//     amendatites: ["wi-fi", "parking"]
// }

// console.log(airBnb.name, airBnb.amendatites)

// let person = {
//     name: "Bilaal",
//     age: 26,
//     country: "UK"
    
// }


// function logData() {
// console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }

// logData()

// let age = 15 

// if (age < 6) {
//     console.log("free")
// } else if (age < 18) {
//     console.log("child discount")
// } else if (age < 27) {
//     console.log("student discount")
// } else if (age < 67) {
//     console.log("full price")
// } else {
//     console.log("senior citizen discount")
// }

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]


// largeCountries.shift()
// largeCountries.pop()

// largeCountries.unshift("China")
// largeCountries.push("Pakistan")

// console.log(largeCountries)


// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }

// let dayOfMonth = 13
// let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday") {
//     console.log("😱")
// } 

// let hands = ["Rock", "paper", "sciossor"]

// function getHand() {
//     let randomIndex = Math.floor(Math.random() * 3)
//     return hands[randomIndex]
    
// }

// console.log(getHand())

// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("orange-shelf")


// function arrangeFruit() {
//     for (let i = 0; i < fruit.length; i++) {
//         if (fruit[i] === "🍎") {
//             appleShelf.textContent += "🍎"
//         } else if (fruit[i] === "🍊") {
//             orangeShelf.textContent += "🍊"
//         }
//     }
// } 

// console.log(arrangeFruit())


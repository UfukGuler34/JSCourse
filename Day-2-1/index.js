// 1. Create two variables, firstCard and secondCard
// Set their values to a random number between 2-11
let firstCard = 15
let secondCard = 6

// 2. Create a variable, sum, and set it to the sum of two cards
let sum = firstCard + secondCard

// 3. For cash out check is it BlackJack
let hasBlackJack = false

// 4. Create a variable called isAlive and assign it to true
let isAlive = true

// 5. Declare a variable called message and assign its value to an empty string
let message = ""

if ( sum <= 20 ) {
    message = "Do you want to draw a new card?"
}
else if ( sum === 21 ) {
    message = "You've got Blackjack"
    hasBlackJack = true
}
else {
    message = "Loseerr"
    isAlive = false
}


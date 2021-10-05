// For comment
// document.getElementById("count-el").innerText = 5;

// Simple Math Ops.
// let count = 5
// console.log(count)

// let myAge = 23 
// console.log(myAge)

// let text = "hello"
// console.log(text)

// let final = count + myAge
// console.log(final)

// let myAgetwo = 23 
// let humanDogRatio = 7
// let dogAge = myAgetwo * humanDogRatio
// console.log(dogAge)

// initialize the count 0
// listen for clicks on the increment and decrement button
// increase the court variable when the button is clicked
// change the court-el in the HTML to reflect the new count

// let count = 0
// function increase() {
//     console.log("increase button")
// }
// function decrease() {
//     console.log("decrease button")
// }

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()

// let lap1 = 34
// let lap2 = 35
// let lap3 = 33
// let totalLap = 0
// function sum() {
//     totalLap = lap1 + lap2 + lap3
//     // with this type you can not use var outside of the func.
//     // let totalLap = lap1 + lap2 + lap3
//     console.log(totalLap)
// }
// sum()


// let userName = "Per"
// let message = "You have three new notifications"
// console.log(message + ", " + userName + "!")
// let messageToUser = message + ", " + userName + "!"
// console.log(messageToUser)

// let welcomeEl = document.getElementById("welcome-el")
// let nameUG = "UfukGuler"
// let greating = "Hello"
// welcomeEl.innerText = greating + " " + nameUG + "!"
// welcomeEl.innerText +=  "🖖"


let countEl = document.getElementById("count-el")
let count = 0
let savePoint = "Previous entries: "
let saveEl = document.getElementById("save-el")

function increase() {
    count += 1
    countEl.innerText =count
}
function decrease() {
    count -= 1
    countEl.innerText =count
}
function save() {
    savePoint = savePoint +  " " + count 
    console.log(savePoint)
    saveEl.textContent += count + " - "
    countEl.textContent = 0
    count = 0
}


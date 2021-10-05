// PRACTICES

// Practice 1
let nameUG ="Ufuk"
let surNameUG = "Guler"
let fullName = nameUG + " " + surNameUG
console.log(fullName)

// Practice  2
let namee = "Linda"
let greeting = "Hi there"
function gretings() {
    console.log(greeting + ", " +  namee + "!")
}
gretings()

// Practice  3
let myPoints = 0
function add3Point() {
    myPoints += 3
}
function removePoint() {
    myPoints -= 1
}
add3Point()
add3Point()
add3Point()
add3Point()
removePoint()
removePoint()
console.log(myPoints)

// Practice  4
console.log( "2" + 2 ) // 22
console.log( 11 + 7 ) // 18
console.log( 6 + "5" ) // 65
console.log( "My Points: " + 5 + 9 ) // My Points 59
console.log( 2 + 2 ) // 4
console.log( "11" + "14" ) // 1114

// Practice  5
let btn_clicked = document.getElementsByName("button")
let pEl = document.getElementById("error")
function errormsg() {
    pEl.textContent = "Sorry There is a Problem"
}

// Practice  6
let num1 = 8
let num2 = 2
let sum = 0
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


function add() {
    sum = num1 + num2
    document.getElementById("sumel").textContent = "Sum: " + sum
}
function subtract() {
    sum = num1 - num2
    document.getElementById("sumel").textContent = "Sum: " + sum
}
function divide() {
    sum = num1 / num2
    document.getElementById("sumel").textContent = "Sum: " + sum
}
function multiply() {
    sum = num1 * num2
    document.getElementById("sumel").textContent = "Sum: " + sum
}

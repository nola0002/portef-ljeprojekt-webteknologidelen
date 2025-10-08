
//https://www.w3schools.com/jsref/met_win_prompt.asp
const player1 = prompt("Please enter your name:", "Player 1") // using prompt() to define player 1 and 2
const player2 = prompt("Please enter your name:", "Player 2")

console.log(`Welcome to the Dice Rolling Championship!`)
console.log(`Player 1: ${player1}`) //logging player 1 and 2
console.log(`Player 2: ${player2}`)


function diceRoller() {
    return Math.floor(Math.random()* 6)+1;
} // I used math.floor from earlier exercise, got help from ai to use *6 +1, because i couldn't find the answer anywhere else.

const roll = diceRoller()

function playerRoll(playerName) {
    prompt(`${playerName}, press enter to roll...`); // I got help from notion ai to find out how i could use prompt() in a function, because I couldn't find it on the internet.
    console.log(`${playerName} rolled: ${roll}`);
    return roll;
}

console.log(playerRoll(player1))
console.log(playerRoll(player2))







/*
function diceRoller() {
    return Math.floor(Math.random()* 6)+1;
} // I used math.floor from earlier exercise, got help from ai to use *6 +1, because i couldn't find the answer anywhere else.

const roll = diceRoller()
let player1TotalScore = 0;
let player2TotalScore = 0;


function playerRoll(p1, p2) {
    if (prompt(`${p1}, press enter to roll...`)) { // I got help from notion ai to find out how i could use prompt() in a function, because I couldn't find it on the internet.
        console.log(`${p1} rolled: ${roll}`);
        player1TotalScore = player1TotalScore + roll(p1);
        return roll;
    }  else if (prompt(`${p2}, press enter to roll...`)) {
        console.log(`${p2} rolled: ${roll}`);
        player2TotalScore = player2TotalScore + roll(p2);
        return roll;
    }
}


console.log(playerRoll(player1, player2))






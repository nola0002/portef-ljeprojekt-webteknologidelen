
//https://www.w3schools.com/jsref/met_win_prompt.asp
const player1 = prompt("Please enter your name:", "Player 1") // using prompt() to define player 1 and 2
const player2 = prompt("Please enter your name:", "Player 2")

console.log(`Welcome to the Dice Rolling Championship!`)
console.log(`Player 1: ${player1}`) //logging player 1 and 2
console.log(`Player 2: ${player2}`)
console.log(``)


function diceRoller() { //function that finds a random number between 1 and 6
    return Math.floor(Math.random()* 6)+1;
} // I used math.floor from earlier exercise, got help from AI to use *6 +1, because I couldn't find the answer anywhere else.



let player1RollTotal = 0
let player2RollTotal = 0

for (let r = 1; r <= 10; r++ ) {
    console.log(`Round ${r}:`)
    const player1Roll = diceRoller()
    prompt(`${player1}, press enter to roll...`); // I got help from notion AI to find out how i could use prompt() in a function, because I couldn't find it on the internet.
    player1RollTotal = player1RollTotal + player1Roll
    console.log(`${player1}, press enter to roll...`)
    console.log(`${player1} rolled: ${player1Roll} (total: ${player1RollTotal})`);

    const player2Roll = diceRoller()
    prompt(`${player2}, press enter to roll...`); // I got help from notion AI to find out how i could use prompt() in a function, because I couldn't find it on the internet.
    player2RollTotal = player2RollTotal + player2Roll
    console.log(`${player2}, press enter to roll...`)
    console.log(`${player2} rolled: ${player2Roll} (total: ${player2RollTotal})`);

    console.log(``)
}


console.log(`🎉 Game Over! 🎉`)
console.log(`Final Scores:`)
console.log(`${player1}: ${player1RollTotal}`)
console.log(`${player2}: ${player2RollTotal}`)
console.log(``)
if (player1RollTotal > player2RollTotal) {
    console.log(`🏆 ${player1} wins the championship! 🏆`)
} else if (player1RollTotal === player2RollTotal) {
    console.log(`Its a draw, refresh the site and play another game!`)
} else {
    console.log(`🏆 ${player2} wins the championship! 🏆`)
}





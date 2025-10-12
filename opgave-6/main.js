
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



let player1RollTotal = 0 // assigning player1rolltotal to zero so i can add the rolled value in my for loop each round
let player2RollTotal = 0 // assigning player2rolltotal to zero so i can add the rolled value in my for loop each round

for (let r = 1; r <= 10; r++ ) { // making a for loop that starts at 1 ends at 10. r value stands for rounds.
    console.log(`Round ${r}:`) // logging the number of round we're in every time the loop starts.
    const player1Roll = diceRoller() // assigning our dice rolling function, to a easier name being player1roll.
    prompt(`${player1}, press enter to roll...`); // player 1 is getting asked by the pup op prompt to press enter to roll.
    player1RollTotal = player1RollTotal + player1Roll // adding the rolled value from the player to the prior assigned roll total
    console.log(`${player1}, press enter to roll...`) // logging the press enter to roll, so we also can see it in the console.
    console.log(`${player1} rolled: ${player1Roll} (total: ${player1RollTotal})`); // loggin the playername what he rolled and the total after the round we're in.

    const player2Roll = diceRoller() // doing the exact same for player2 as we did for player 1.
    prompt(`${player2}, press enter to roll...`);
    player2RollTotal = player2RollTotal + player2Roll
    console.log(`${player2}, press enter to roll...`)
    console.log(`${player2} rolled: ${player2Roll} (total: ${player2RollTotal})`);

    console.log(``)
}


console.log(`🎉 Game Over! 🎉`) //logging the expected output from the exercise
console.log(`Final Scores:`) //logging the expected output from the exercise
console.log(`${player1}: ${player1RollTotal}`) //logging player1 name and his total score after the 10 rounds.
console.log(`${player2}: ${player2RollTotal}`) //logging player2 name and his total score after the 10 rounds.
console.log(``) // making a line shift.
if (player1RollTotal > player2RollTotal) { // if player 1 total score is larger than player 2 total score
    console.log(`🏆 ${player1} wins the championship! 🏆`) // log this
} else if (player1RollTotal === player2RollTotal) { // if player 1 total score equals player 2 total score
    console.log(`Its a draw, refresh the site and play another game!`) // log this
} else { // if none of the above is true
    console.log(`🏆 ${player2} wins the championship! 🏆`) // log this
}





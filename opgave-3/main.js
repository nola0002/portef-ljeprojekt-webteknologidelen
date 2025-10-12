const island = ['T','-','T','-','T'];
// Array that shows what positions there are treasures on
// 'T' is treasure

let treasureCount = 0
// Treasure counter is assigned to 0 so we later on can add to the counter if a treasure
// is found in the loop. we're using let and not const, so the variable can get reassigned.
console.log(`There are ${island.length} moves in the island`) //logging how many moves the island has using the .length that counts the items in a array
console.log('') //for spacing in the console
for (let i = 0; i < island.length; i++) {// for loop using i is smaller than island.length. This is used so the loop stops when its gone through all elements in the array.
    const movesOnIsland = island[i] // island[i] represents the moves on the island, every time we go through the loop it moves to the next move on the island.
    const treasureFound = movesOnIsland === 'T' // At every move we check if there's a T, if that's true then we found a treasure.
    if (treasureFound) { // if a treasure is found
        console.log(`Treasure found at move ${i+1} :)`) // log this, we're using ${i+1} because the first element in array is always starting with the value 0.
        treasureCount++; //Every time we log the above and a treasure is found we have to add one to the treasure count.
    } else { // If a treasure isn't found
        console.log('No treasure found :(') //log this
    }
}
console.log('') //for spacing in the console
console.log(`There are ${treasureCount} Treasure's on the island`) // Logging our treasure count that after going through the loop represents how many treasures there were found on the island.
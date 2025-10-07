function getRandomItemFromArray(array) {
    const item = array[Math.floor(Math.random()*array.length)]; //https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
    return item;
}

// funktion der kombinerer et ord fra hvert af det to arrays.
function combineRandomWordsFromArray(array1,array2) {
    const word1 = getRandomItemFromArray(array1);
    const word2 = getRandomItemFromArray(array2);
    return `${word1} ${word2}`
}

// Array 1: First part of the startup name
const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];

// Array 2: Second part of the startup name
const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

console.log(combineRandomWordsFromArray(firstWords,secondWords))
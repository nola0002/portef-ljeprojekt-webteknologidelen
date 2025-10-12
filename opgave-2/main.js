function getRandomItemFromArray(array) {
    const item = array[Math.floor(Math.random()*array.length)]; //https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
    return item; // used stack overflow to find out how i could get a random word from an array.
}

// function that combines one word from each of the two arrays.
function combineRandomWordsFromTwoArrays(array1,array2) { //defining the function with to parameters, so we later on can use our two arrays as arguments.
    const word1 = getRandomItemFromArray(array1); //assigning word 1 to be a random word from the first array.
    const word2 = getRandomItemFromArray(array2); //assigning word 2 to be a random word from the first array.
    return `${word1} ${word2}` // return word1 from the first array put together with word2 from the second array.
}

// Array 1: First part of the startup name
const firstWords = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];

// Array 2: Second part of the startup name
const secondWords = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

console.log(combineRandomWordsFromTwoArrays(firstWords,secondWords))
//logging our function that combines one word from two different arrays, calling the function
//with our arguments firstwords(first array) and secondwords(second array)
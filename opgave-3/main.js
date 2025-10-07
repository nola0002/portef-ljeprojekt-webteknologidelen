const island = ['T','-','T','-','T']; // Vores array der fortæller hvilke positioner der er skatte på


let treasureCount = 0 // Vores treasure counter, vi skal bruge let keyworded og ikke const, da vi kommer til at ændre værdien senere.


for (let i = 0; i < island.length; i++) { // Helt standard for loop, der stopper når den har gået igennem alle elementer i arrayet.
    if (island[i] === 'T') { // Det skal logges hver gang der er et T i vores array, T står for treasure. island[i] gør så hver element
        console.log(`Treasure found at move ${i+1} :)`) // Skriver ${i+1} fordi et array's første værdi er 0.
        treasureCount++; //Hver gang vi logger at der er blevet fundet en skat skal counter plussed med 1
    } else { // Hvis ikke der bliver fundet en skat
        console.log('No treasure found :(') // Så skal det her logges
    }
}
console.log(`There are ${treasureCount} Treasure's on the island`) // Vi logger her i bunden hvor mange skatte der i alt er fundet på øen.
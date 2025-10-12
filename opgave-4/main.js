/* Exercise 4.1
const grades = [38, 92, 78, 63, 69, 88, 14, 54,]; // defining my array

 */

/* Exercise 4.2
const grades = [38, 92, 78, 63, 69, 88, 14, 54,]; // Using the same array used in prior exercise
console.log(`There are ${grades.length} different grades on the array`) // logging with grades.length (counts the items in a array)

 */

/* Exercise 4.3
const studentGrades = [38, 92, 78, 63, 69, 88, 14, 54]; // same array as before

studentGrades.forEach((grade) => { // using for each method to iterate my array
    if (grade >= 90) {
        console.log(`${grade}: A`) // using if sentence to log elements in my array that are larger or equals 90
    } else if (grade >= 80) {
        console.log(`${grade}: B`) // using else if sentence to log elements in my array that are larger or equals 80
    } else if (grade >= 70) {
        console.log(`${grade}: C`)
    } else if (grade >= 60) {
        console.log(`${grade}: D`)
    } else if (grade >= 0) {
        console.log(`${grade}: F`)
    }
});

 */

/* Exercise 4.4
const studentGrades = [38, 92, 78, 63, 69, 88, 90, 54]; //same array

let sumOfGrades = 0 // setting variable sum of grades to 0 so every time i pass a element in my array i can add to that sum.
studentGrades.forEach((grade) => { // grade represents each grade in the array, using for each to iterate my array.
    sumOfGrades = sumOfGrades + grade; // Every time we pass a element we're going to add that to the sumofgrades.
});

const avgGrade = sumOfGrades /studentGrades.length; //dividing the total sum of the grades by the length of the array to find average.
if (avgGrade >= 90) { // Logging if the average is larger or equals 90.
    console.log(`The class performance is excellent`)
} else if (avgGrade >= 80) { //Logging if the average is larger or equals 80.
    console.log(`The class performance is good`)
} else if (avgGrade >= 70 ) { //Logging if the average is larger or equals 70.
    console.log(`The class performance is satisfactory`)
} else if (avgGrade >= 0) { //Logging if the average is larger or equals 0.
    console.log(`The class performance needs improvement`)
}

 */

/* Exercise 4.5
const studentGrades = [38, 92, 78, 63, 69, 88, 90, 54]; // Same array

let sumOfGrades = 0 // setting variable sum of grades to 0 so every time i pass a element in my array i can add to that sum.
let max = studentGrades[0] //https://www.w3schools.com/java/java_howto_min_max_array.asp
let min = studentGrades[0]
// creating a variable max and min studentGrades[0], max and min equals first element in the array
studentGrades.forEach((grade) => { // grade represents each grade in the array, using for each to iterate my array.
    sumOfGrades = sumOfGrades + grade; // Every time we pass a element we're going to add that to the sumOfGrades.
    if (grade > max) { // if the element we're passing in the array is larger than the current max.
        max = grade; // Then that element we passed is going to be the new max
    } else if (grade < min){ //if the element we are passing in the array is smaller than the current minimum.
        min = grade; // Then that element we passed is going to be the new minimum.
    }
});

const avgGrade = sumOfGrades /studentGrades.length; //dividing the total sum of the grades by the length of the array to find average.


console.log(max) //logging max.
console.log(min) //logging minimum.
console.log(avgGrade) //logging average grades of the students in the array.

 */


const studentGrades = [38, 92, 78, 63, 69, 88, 90, 54];

let sumOfGrades = 0
let max = studentGrades[0]
let min = studentGrades[0]
const howManyGrades = studentGrades.length

studentGrades.forEach((grade) => { // grade represents each grade in the array
    sumOfGrades = sumOfGrades + grade;
    if (grade > max) {
        max = grade;
    } else if (grade < min){
        min = grade;
    }
});

const avgGrade = sumOfGrades /studentGrades.length;


function findCategory(element) { // made a function that returns the category a number is in.
    if (element >= 90) {
        return `${element} (A)`
    } else if (element >= 80) {
        return `${element} (B)`
    } else if (element >= 70) {
        return `${element} (C)`
    } else if (element >= 60) {
        return `${element} (D)`
    } else if (element >= 0) {
        return `${element} (F)`
    }
}
// using the function to find out and log which category the max and minimum is in.
console.log(`There are ${howManyGrades} grades in the class`)
// logging the amount of grades.

studentGrades.forEach((grade) => {
    if (grade >= 90) {
        console.log(`${grade} (A)`)
    } else if (grade >= 80) {
        console.log(`${grade} (B)`)
    } else if (grade >= 70) {
        console.log(`${grade} (C)`)
    } else if (grade >= 60) {
        console.log(`${grade} (D)`)
    } else if (grade >= 0) {
        console.log(`${grade} (F)`)
    }
});
//logging the list of grades with the category

console.log(`Highest grade: ${findCategory(max)}`) //logging max grade with the category
console.log(`Lowest grade: ${findCategory(min)}`) //logging minimum grade with the category
console.log(`Average grade: ${avgGrade}`) //logging average grade

// in exercise 4.6 we're putting all the things we learned from prior levelse together.


// 1
for (i = 1; i <= 7; i++) {
    console.log(i);
};
// 2
for (i = 5; i <= 25; i+= 4) {
    console.log(i);
};
// 3a
const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
];
// 3b
for (item of wizards){
    console.log(item);
}
// 4a
let harryPotterMovies = 0;
// 4b
let number = 1;
while (harryPotterMovies < 8) {
    harryPotterMovies++;
}
// 4c
console.log(harryPotterMovies);

// BONUS
// 5a
const hogwartsHouses = [
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin"
];
// 5b
for (houses of hogwartsHouses) {
    for (letters of houses){
        console.log(letters);
    }
};
// 6a
const quote = [
    "Yer",
    "A",
    "Wizard",
    "Harry"
];
// 6b
let sentence = "";
for (word of quote) {
    sentence += word + " ";           //same as sentence = sentence + `${word} `;
}
console.log(sentence);

// OR

// while (quote !== sentence) {
//     console.log(quote.join(" "));
//     break;
// }

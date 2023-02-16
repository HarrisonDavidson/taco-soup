// Exercise 1
// var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
// for(var i = 0; i < harryPotterTitles.length; i++){
//     console.log(harryPotterTitles[i]);
// }

//Exercise 2
// var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92];
// let numberOfAs = 0;
// let numberOfBs = 0;
// let numberOfCs = 0;
// let numberOfDs = 0;
// let numberOfFs = 0;
// let mostCommonGradeCount = 0;
// let mostCommonGrade = 0;
// let averagePercentageGrade = 0;
// let totalGradePoints = (grades.length);

// for(i = 0; i < grades.length; i++){
//     if (grades[i] >= 0 && grades[i] <=69){
//         numberOfFs++
//     } else if (grades[i] >= 70 && grades[i] <= 76){
//         numberOfDs++
//     } else if (grades[i] >= 77 && grades[i] <= 84){
//         numberOfCs++
//     } else if (grades[i] >=85 && grades[i]<= 92){
//         numberOfBs++
//     } else if (grades[i] >= 93 && grades[i]<= 100){
//         numberOfAs++
//     }
// }

// for (i = 0; i < grades.length; i++)
// {
//     if (mostCommonGradeCount < numberOfFs){
//         mostCommonGradeCount = numberOfFs
//         mostCommonGrade = "F"
// } else if (mostCommonGradeCount < numberOfDs){
//     mostCommonGradeCount = numberOfDs
//     mostCommonGrade = "D"
// } else if (mostCommonGradeCount < numberOfCs){
//     mostCommonGradeCount = numberOfCs
//     mostCommonGrade = "C"
// } else if (mostCommonGradeCount < numberOfBs){
//     mostCommonGradeCount = numberOfBs
//     mostCommonGrade = "B"
// } else if (mostCommonGradeCount < numberOfAs){
//     mostCommonGradeCount = numberOfAs
//     mostCommonGrade = "A"
// }
// }

// for (i = 0; i < grades.length; i++){
//     totalGradePoints += grades[i]
//     }
//     averagePercentageGrade = totalGradePoints / grades.length

// console.log(`There are ${numberOfAs} As in this class`)
// console.log(`There are ${numberOfBs} Bs in this class`)
// console.log(`The most common letter grade is ${mostCommonGrade}`)
// console.log(`The total is ${totalGradePoints}`)
// console.log(`The average percentage grade is ${Math.ceil(averagePercentageGrade)}%`)
// console.log(totalGradePoints)

// Exercise 3
// let count = '';
// for(let y = 2; y <= 8; y +=2){
//     count += y + ' '
// }
// console.log(count + 'Who do we appreciate?!');

// Exercise 3 redux
// let count = '';
// for(let y = 1; y <= 4; y +=1){
//     count += y + ' '
// }
// console.log(count + 'Who are we all cheering for?!');

// Exercise 4 - The Cow
// var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
// let sentence = '';
// let moo = " MOOOOOOOO";
// for(let a = 0; a < sentenceArray.length; a++){
//     if((a + 1) % 3 ===1 && (a != 0)){
//         sentence += moo;
//     } sentence += ` ${sentenceArray[a]}`
//     }
//     console.log(sentence)

// Exercise 4 - The Beatles

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[0]} Album.`);
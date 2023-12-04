// 12 red, 13 green, 14 blue

const fs = require('fs')
// Part one

const data = fs.readFileSync('./puzzleInput.txt', 'utf8')

const arrayOfEntries = data.split('\n')
// console.log(arrayOfEntries)
const arrayOfGames = arrayOfEntries.map((game, index) => {
    const singleGameEntry = game.split(': ')[1];
    return singleGameEntry
})

const extractColor = (entry, startIndex, length) => {
    // 13 red
    // i + 3 = r
    // i + 5 = d
    return entry.substring(startIndex, startIndex + length);
}
const indexesOfGame = [];
arrayOfGames.forEach((singleFormattedGameEntry, indexOfGame) => {
    for (let i = 0; i < singleFormattedGameEntry.length; i++) {
        const numberString = `${singleFormattedGameEntry[i]}${singleFormattedGameEntry[i + 1]}`
        const numberOfCubes = Number(numberString)
        // Only if the number of cubes is greater than 12, we will push the index into an array
        if (numberOfCubes > 12) {
            // const red = `${singleFormattedGameEntry[i + 3]}${singleFormattedGameEntry[i + 4]}${singleFormattedGameEntry[i + 5]}`
            const red = extractColor(singleFormattedGameEntry, i + 3, 3);
            const blue = extractColor(singleFormattedGameEntry, i + 3, 4);
            const green = extractColor(singleFormattedGameEntry, i + 3, 5);
            if (red === "red" && numberOfCubes > 12 || green === "green" && numberOfCubes > 13 || blue === "blue" && numberOfCubes > 14) {
                indexesOfGame.push(indexOfGame)
            }
        }
    }
})
// Use that array of indexes to loop through the original array of games
// Since their indexes are just one off their game id, we can use that together to combine the sums together
let sumOfValidIds = 0;
arrayOfEntries.forEach((e, i) => {
    !indexesOfGame.includes(i) && (sumOfValidIds += i + 1)
});
console.log(sumOfValidIds)
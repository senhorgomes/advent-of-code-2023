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

const highestColorPicked = (arrayOfHandPicks, object) => {
    arrayOfHandPicks.forEach((colorCount)=> {
        const [count, color] = colorCount.split(' ');
        const convertedCount = Number(count);
        if(object[color] < convertedCount){
            object[color] = convertedCount
        }
    })
}

const sumOfKeys = (object) => {
    const arrayOfValues = Object.values(object);
    const initalValue = 1;
    const sumOfValues = arrayOfValues.reduce((acc, cur)=> acc * cur, initalValue)
    return sumOfValues;
}

let sumOfPowers = 0
arrayOfGames.forEach((singleFormattedGameEntry, indexOfGame) => {
    console.log(singleFormattedGameEntry)
    const objectOfPicks = {
        "red": 0,
        "blue": 0,
        "green": 0
    }
    // const gameData = singleFormattedGameEntry.split(': ')[1];
    const arrayOfHandPicks = singleFormattedGameEntry.match(/\d+\s(red|blue|green)/g)
    highestColorPicked(arrayOfHandPicks, objectOfPicks)
    const power = sumOfKeys(objectOfPicks)
    sumOfPowers += power;
})
console.log(sumOfPowers)

// Part one
const fs = require('fs')

const data = fs.readFileSync('./puzzleInput.txt', 'utf8')

const formattedData = data.split('\n')
// console.log(formattedData)
const validNumbers = []
let totalNumber = 0;
const validSymbols = {
    "*": true,
}
const gearRatios = {}
const checkForMatches = (currentRow, currentColumn, numberLength) => {
    //  -1
    //  +1
    const checkLeftOfNumber = currentRow[currentColumn - 1];
    const checkRightOfNumber = currentRow[currentColumn + numberLength]
    if (validSymbols[checkLeftOfNumber] || validSymbols[checkRightOfNumber]) {
        return true
    }
    return false
}
// .....%821...
const checkForMatchesAboveAndBelow = (rowBelow, rowAbove, numberLength, currentColumn) => {
    for (let column = currentColumn - 1; column  < currentColumn + numberLength +1; column ++) {
        if (rowAbove && column  >= 0 && column  < rowAbove.length) {
            const indexAbove = rowAbove[column];
            // insert in gearRatios object
            if (isNaN(Number(indexAbove)) && validSymbols[indexAbove]) {
                return true
            }
        }
        if (rowBelow && column >= 0 && column < rowBelow.length) {
            const indexBelow = rowBelow[column];
            if (isNaN(Number(indexBelow)) && validSymbols[indexBelow]) {
                return true
            }
        }
    }



}
// .....%821...
const testString = [
    '...........................................751........501*55................................890.231...............829..168......143.........',
    '......................................*.........841....*....../................+..311.......................441..........*...........202....',
    '.........332...60....537..697.......901.................609....678....261.....90................870....519...........272..449.......%.......'
]
const objectForMutualGears = []
for (let row = 0; row < testString.length; row++) {
    // const currentLoopedArray = formattedData[row];
    const currentLoopedArray = testString[row];
    for (let column = 0; column < currentLoopedArray.length; column++) {
        let number = Number(currentLoopedArray[column])
        let actualNumber = ''
        let currentColumn = column;
        if (number) {
            actualNumber += currentLoopedArray[column]
            if (!isNaN(Number(currentLoopedArray[column + 1]))) {
                actualNumber += currentLoopedArray[column + 1]
                if (!isNaN(Number(currentLoopedArray[column + 2]))) {
                    actualNumber += currentLoopedArray[column + 2]
                }
                column += actualNumber.length - 1;
            }
            if (checkForMatches(currentLoopedArray, currentColumn, actualNumber.length) || checkForMatchesAboveAndBelow(testString[row - 1], testString[row + 1], actualNumber.length, currentColumn)) {
                validNumbers.push(Number(actualNumber))
                totalNumber += Number(actualNumber)
            }

        }
    }
}

//  %&@$ 
// Using match instead
// const numberMatches = testString.match(/[*/#=+\-%&@$]\d+\.*\d*|\d+\.*\d*[*/#=+\-%&@$]/g);
// const numberMatches = testString.match(/(?<=[*\/#=+\-%&@$])\d+\.*\d*|\d+\.*\d*(?=[*\/#=+\-%&@$])/g)
console.log(validNumbers)
// console.log(totalNumber)


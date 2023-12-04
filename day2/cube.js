// 12 red, 13 green, 14 blue

const fs = require('fs')
// Part one
const arrayOfGames = []
fs.readFile('./puzzleInput.txt', 'utf8', (e,d)=>{
    const arrayOfEntries = d.split('\n')
    // console.log(arrayOfEntries)
    arrayOfEntries.forEach((game, index)=>{
        const singleGameEntry = game.split(': ')[1];
        arrayOfGames.push(singleGameEntry)
       
        // const singleGameHandPicks = singleGameEntry.split('; ')
        // // [ '6 green, 3 blue', '3 red, 1 green', '4 green, 3 red, 5 blue' ]
        // // console.log(singleGameHandPicks[0].split(', '))
        // singleGameHandPicks.forEach((handPick)=> {
        //     console.log(handPick.split(', '))
        //     const singleColorGroups = handPick.split(', ');
        // })
        // [ '6 green', '3 blue' ]
    })
    // At first I had way to many splits, decided to go through a "simpler" route, and just loop through the string since the structure is the same
    const indexesOfGame = [];
    arrayOfGames.forEach((singleFormattedGameEntry, indexOfGame)=> {
        for(let i = 0; i < singleFormattedGameEntry.length; i ++){
            const numberString = `${singleFormattedGameEntry[i]}`+`${singleFormattedGameEntry[i + 1]}`
            const numberOfCubes = Number(numberString)
            // Only if the number of cubes is greater than 12, we will push the index into an array
            if(numberOfCubes > 12){
                const red = `${singleFormattedGameEntry[i + 3]}${singleFormattedGameEntry[i + 4]}${singleFormattedGameEntry[i + 5]}`
                const blue = `${singleFormattedGameEntry[i + 3]}${singleFormattedGameEntry[i + 4]}${singleFormattedGameEntry[i + 5]}${singleFormattedGameEntry[i + 6]}`
                const green = `${singleFormattedGameEntry[i + 3]}${singleFormattedGameEntry[i + 4]}${singleFormattedGameEntry[i + 5]}${singleFormattedGameEntry[i + 6]}${singleFormattedGameEntry[i + 7]}`
                if(red === "red" && numberOfCubes>12 || green === "green" && numberOfCubes>13 || blue === "blue" && numberOfCubes>14){
                    indexesOfGame.push(indexOfGame)
                }
            }
        }
    })
    // Use that array of indexes to loop through the original array of games
    // Since their indexes are just one off their game id, we can use that together to combine the sums together
    let sumOfValidIds = 0;
    arrayOfEntries.forEach((e, i)=> {
        !indexesOfGame.includes(i) && (sumOfValidIds += i+1)
    });
    console.log(sumOfValidIds)
    
})

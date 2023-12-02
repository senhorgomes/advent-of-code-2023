const fs = require('fs')
// Part one
fs.readFile('./puzzleInput.txt', 'utf8', (e,d)=>{
    const arrayOfEntries = d.split('\n')
    let totalValue = 0;
    for(const singleLineOfText of arrayOfEntries){
        let firstNumber = 0;
        let lastNumber = 0;
        for(const letter of singleLineOfText){
            if(!isNaN(letter)){
                if(firstNumber === 0){
                    firstNumber = letter
                }
                lastNumber = letter
            }
        }
        let calibrationValue = firstNumber + lastNumber
        totalValue += Number(calibrationValue)
    }
    console.log(totalValue);
})

// Part two
fs.readFile('./puzzleInput.txt', 'utf8', (e,d)=>{
    // one, two, three, four, five, six, seven, eight, and nine
    // Three letter one, two, six, 
    // four, five, nine
    // three, seven, eight
    const arrayOfEntries = d.split('\n')
    let totalValue = 0;
    for(const singleLineOfText of arrayOfEntries){
        // should still keep the same loop, but check the next indexs of that singleLineOfText
        let firstNumber = 0;
        let lastNumber = 0;
       for(let i = 0; i < singleLineOfText.length; i ++){
        let threeLetterNumber = singleLineOfText[i]+singleLineOfText[i + 1]+singleLineOfText[i + 2]
        let fourLetterNumber = singleLineOfText[i]+singleLineOfText[i + 1]+singleLineOfText[i + 2]+singleLineOfText[i + 3]
        let fiveLetterNumber = singleLineOfText[i]+singleLineOfText[i + 1]+singleLineOfText[i + 2]+singleLineOfText[i + 3]+singleLineOfText[i + 4]
        if(firstNumber === 0){
            if(threeLetterNumber=== "one"){
                firstNumber = 1;
            }
            if(threeLetterNumber=== "two"){
                firstNumber = 2;
            }
            if(threeLetterNumber=== "six"){
                firstNumber = 6;
            }
            if(fourLetterNumber=== "four"){
                firstNumber = 4;
            }
            if(fourLetterNumber=== "five"){
                firstNumber = 5;
            }
            if(fourLetterNumber=== "nine"){
                firstNumber = 9;
            }
            if(fiveLetterNumber=== "three"){
                firstNumber = 3;
            }
            if(fiveLetterNumber=== "seven"){
                firstNumber = 7;
            }
            if(fiveLetterNumber=== "eight"){
                firstNumber = 8;
            }
        }
        if(threeLetterNumber=== "one"){
            firstNumber = 1;
        }
        if(threeLetterNumber=== "two"){
            firstNumber = 2;
        }
        if(threeLetterNumber=== "six"){
            firstNumber = 6;
        }
        if(fourLetterNumber=== "four"){
            firstNumber = 4;
        }
        if(fourLetterNumber=== "five"){
            firstNumber = 5;
        }
        if(fourLetterNumber=== "nine"){
            firstNumber = 9;
        }
        if(fiveLetterNumber=== "three"){
            firstNumber = 3;
        }
        if(fiveLetterNumber=== "seven"){
            firstNumber = 7;
        }
        if(fiveLetterNumber=== "eight"){
            firstNumber = 8;
        }
       }
        let calibrationValue = firstNumber + lastNumber
        totalValue += Number(calibrationValue)
    }
    console.log(totalValue);
})
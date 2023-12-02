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
       
        let calibrationValue = firstNumber + lastNumber
        totalValue += Number(calibrationValue)
    }
    console.log(totalValue);
})
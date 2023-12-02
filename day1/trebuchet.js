const fs = require('fs')

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
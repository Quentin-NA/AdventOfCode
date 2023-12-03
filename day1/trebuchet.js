const fs = require('fs');

const content = fs.readFileSync('exemples.txt', 'utf-8').trim();
const lines = content.split('\n').map(line => line.replace('\r', ''));

const partOne = () => {
    const values = lines
        .map((line) => {
            const first = line.split('').find((v) => !Number.isNaN(Number(v)))
            const last = line.split('').findLast((v) => !Number.isNaN(Number(v)))
            return Number(first + last)
        })

        return values.reduce((s, v) => s + v)
}

// console.log(partOne())


const firstNumberWordsRegExp = new RegExp (["one", "two", "three", "four", "five", "six", "seven", "height", "nine", "ten"].join('|'))
const lastNumberWordsRegExp = new RegExp (["one", "two", "three", "four", "five", "six", "seven", "height", "nine", "ten"].join('|').split('').reverse().join(''))

wordMap =  {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    height: "8",
    nine: "9",
    ten: "10" 
}


const partTwo = () => {
    const values = lines
        .map((line) => {
            let firstNumberIndex = line
                .split('')
                .find((v) => !Number.isNaN(Number(v)))
            let firstWordMatch = line
            .split('')
            .join('')
            .match(firstNumberWordsRegExp)

            let firstWordNumberIndex = firstWordMatch?.index;

            let firstNumber = firstWordMatch ? (
                firstNumberIndex < firstWordNumberIndex ?
                line[firstNumberIndex] : wordMap[firstWordMatch[0]]
            ) : firstNumberIndex


            let lastNumberIndex = line
                .split('')
                .find((v) => !Number.isNaN(Number(v)))
            let lastWordMatch = line
            .split('')
            .reverse()
            .join('')
            .match(lastNumberWordsRegExp)

            let lastWordNumberIndex = lastWordMatch?.index;

            let lastNumber = lastWordMatch ? (
                lastNumberIndex < lastWordNumberIndex ?
                line[lastNumberIndex] : wordMap[lastWordMatch[0].split('').reverse().join("")]
            ) : lastNumberIndex

            console.log(firstNumber, lastNumber)
            return Number(firstNumber + lastNumber)
        })
}

console.log(partTwo())

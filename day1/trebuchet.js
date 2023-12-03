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

console.log(partOne())
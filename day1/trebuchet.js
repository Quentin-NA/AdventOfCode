import fs from 'fs';

const lines = fs.readFileSync('exemples.txt', 'utf-8').trim()
console.log(lines)
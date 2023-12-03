const fs = require('fs');

const content = fs.readFileSync('exemples.txt', 'utf-8').trim();
const lines = content.split('\n').map(line => line.replace('\r', ''));

console.log(lines);
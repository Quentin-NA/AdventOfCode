const fs = require('fs');

const content = fs.readFileSync('example.txt', 'utf-8').trim();
const lines = content.split('\n').map(line => line.replace('\r', ''));

console.log(lines)
// Determine which games would have been possible if the bag had been loaded with only:
//  12 red cubes, 
//  13 green cubes, 
//  14 blue cubes. 
//  What is the sum of the IDs of those games?

  const resultObject = {};
let games = []
  lines.forEach((gameString) => {
    const games = gameString.split(';');
    let firstSet
    firstSet = games[0].split(":").pop()
    games.splice(0, 1, firstSet)
    console.log(games)
})
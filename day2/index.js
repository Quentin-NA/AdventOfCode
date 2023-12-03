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
let sets = []
  lines.forEach((gameString, gameIndex) => {
    const games = gameString.split(';');
    console.log(games)
    // for (let i = 0; )
    sets = games[0].split(":").pop()
    console.log(sets)

  })

// lines.forEach((gameString, gameIndex) => {
//   const [gameHeader, ...sets] = gameString.split(';');

//   const gameKey = `Game ${gameIndex + 1}`;
//   resultObject[gameKey] = {};

//   sets.forEach((setString, setIndex) => {
//     const setKey = `Set ${setIndex + 1}`;
//     resultObject[gameKey][setKey] = [];

//     const scores = setString.split(',').map((score) => {
//       const [count, color] = score.trim().split(/\s+/);
//       return {
//         score: parseInt(count, 10),
//         color: color.toLowerCase(),
//       };
//     });

//     resultObject[gameKey][setKey] = scores;
//   });
// });

// console.dir(resultObject, { depth: null });
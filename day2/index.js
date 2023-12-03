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
const games = []
  lines.forEach((gameString) => {
    const games = gameString.split(';');
    let firstSet
    firstSet = games[0].split(":").pop()
    games.splice(0, 1, firstSet)
    // console.log(games)
    const finalGameTemplate = games.map((games) => games.trim().split(','))
    // console.log(finalGameTemplate)
    const sets = finalGameTemplate.map((set) => set.map((s) => s.trim().split(',')))
    // console.log(sets)
    const splittedSet = sets.map((set) => set.map((s) => s.map((r) => r.split(' '))))
    const flattenSets = (sets) => {
        return sets.reduce((acc, set) => {
          const flattenedSet = set.map(([count, color]) => `${count} ${color}`);
          return acc.concat(flattenedSet);
        }, []);
      };
      
      const result = splittedSet.map(flattenSets);

    console.dir(result, { depth: null });
})


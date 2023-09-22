// CODING CHALLENGE # 3
console.log('Challenge 3:');
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card'],
]);

// 1.
const events = new Set(gameEvents.values());
console.log([...events]);

// 1. instructor solution
const eventz = [...new Set(gameEvents.values())];
console.log(eventz);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 2. instructor solution
//same as mine

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 3. instructor solution
//same as mine

// 4.
for (const event of [...gameEvents]) {
  if (event[0] < 46) {
    console.log(`[First Half] ${event[0]}: ${event[1]}`);
  } else {
    console.log(`[Second Half] ${event[0]}: ${event[1]}`);
  }
}

// 4. instructor solution
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

//CODING CHALLENGE 4

// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
textarea.placeholder = 'paste from bottom of code';
button.innerHTML = 'send';

const camelCase = (str) => {
  const lower = str.toLowerCase().replaceAll(' ', '');
  const arr = lower.split('\n');
  const result = [];
  for (const index of arr) {
    result.push(
      index.slice(0, index.indexOf('_')) +
        index[index.indexOf('_') + 1].toUpperCase() +
        index.slice(index.indexOf('_') + 2)
    );
  }
  const final = [];
  result.forEach((elem) =>
    final.push(
      String(elem)
        .padEnd(20, ' ')
        .padEnd(result.indexOf(elem) + 21, '✅')
    )
  );
  return final.join(' ' + '\n');
};
// console.log(
//   camelCase(`underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure`)
// );

button.addEventListener('click', () => {
  const textData = textarea.value;
  console.log(`INPUT: \n${textData}`);
  console.log(`OUTPUT: \n${camelCase(textData)}`);
});
/*
// INSTRUCTOR SOLUTION:
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
  }
});
*/
// PASTE INTO TEXTBOX AND CLICK SEND:
/* 

underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure

*/

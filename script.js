// ---SETS---
//can hold mixed data types
//sets are iterables
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
//all of the duplicates are gone
console.log(ordersSet); // {"Pasta", "Pizza", "Rosotto"}

console.log(new Set('mitch')); // {"m", "i", "t", "c", "h"}

// working with sets

console.log(ordersSet.size); // 3 (same output as .length)
console.log(ordersSet.has('Pizza')); // true // similar to .includes() for arr
console.log(ordersSet.has('Bread')); // false

//adding elements ... .add()
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread'); // 2 were added
console.log(ordersSet); // {"Pasta", "Pizza", "Risotto", "Garlic Bread"}

//deleting elements ... .delete()
ordersSet.delete('Risotto');
console.log(ordersSet);

//retrieving values
//there are no indexes in sets, and there are no way of getting values
//'all values are unique, theres no point to retrieve vals'
//all we need to know is if something is in the set, use .has()

// ordersSet.clear() deletes all the values in a set

// sets are iterables, they can be looped over
for (const order of ordersSet) console.log(order);

//use case for sets
//main use case is to remove duplicate values of arrays
//example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // converts set to array [...]
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('mitchriccio').size);

//sets NOT intended to replace arrays
//if you need a unique set of data, use sets
//otherwise just use arrays

// ---MAPS---
//a lot more useful than sets
//a map is a ds that can map values to keys
//uses key value pairs
//in maps, values/keys can have any data type

const rest = new Map();
rest.set('name', 'Classico Italiano'); // similar to .add() in sets
rest.set(1, 'Firenze, Italy');
//calling set method UPDATES the map, AND RETURNS it
console.log(rest.set(2, 'Lisbon, Portugal'));
//the fact that it gets returned, allows us to chain the set method..
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are closed!');
//retrieve the data... .get()
//data types must match
console.log(rest.get('name'));
console.log(rest.get(true));

//using boolean keys (true, false)
//maps back to the true/false keys and displays the value
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // we are open!

//check if map contains certain key
console.log(rest.has('categories'));

//delete
rest.delete(2);
console.log(rest); // deletes the 2, 'lisbon portugal' key value pair from the map

//size
console.log(rest.size); // 7

//clear all elements
//rest.clear()

//can use arrays or objects as mapkeys
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.size);

console.log(rest.get(arr));

// ---MAPS, ITERATION---

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again'],
]);
console.log(question);
//same array structure that is returned from calling:
//console.log(Object.entries())
//THIS IS AN EASY WAY TO CONVERT FROM OBJECTS TO MAPS
// const hoursMap = new Map(Object.entries(openingHours))

//ITERATION
//Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer: ${key}: ${value}`);
  }
}
const answer = 3;
// const answer = Number(prompt('Your answer'));
console.log(answer);

if (answer === 3) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}

//CONVERT MAP INTO ARRAY
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

// --- WORKING WITH STRINGS/STRING METHODS ---

const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

// METHODS
console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')); // 8 (the start of the str)

// SLICE... .slice(4, 10) - first = start of slice, last = end of slice (non-inclusive)
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

// just extract the first word of airline
console.log(airline.slice(0, airline.indexOf(' ')));

// just extract the last word of airline
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); // al (takes the last 2 chars)
console.log(airline.slice(1, -1)); // AP Air Portuga (the first and last are sliced)

// write a function that receives an airpine seat
// and logs if it is a middle seat or not

//my solution
const checkMiddleSeat = (seat) => {
  //B and E are the middle seats
  if (seat.match('B') || seat.match('E')) {
    console.log(`${seat} is a middle seat`);
  } else {
    console.log(`${seat} is not a middle seat`);
  }
};
checkMiddleSeat('11E');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// instructor solution
const checkMiddle = (seat) => {
  //B and E are middle seats
  const s = seat.slice(-1);
  console.log(
    s === 'B' || s === 'E'
      ? `${seat} = middle seat`
      : `${seat} = not a middle seat`
  );
};
checkMiddle('11E');
checkMiddle('23C');
checkMiddle('3E');

//

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix capitalization in name
const passenger = 'miTcH'; // should be Mitch
//make whole str lowercase
const passengerLower = passenger.toLowerCase();
//make first letter uppercase & add in the rest of the lowercase string
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect); // Mitch

// make a function of the above ^
const fixName = (passenger) => {
  const lowercase = passenger.toLowerCase();
  return lowercase[0].toUpperCase() + lowercase.slice(1);
};
console.log(fixName('miTcHeLL'));

//compare emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); // removes the spaces/enter
console.log(trimmedEmail);
//there is also .trimStart() and .trimEnd()
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
//.replace only replaces the first occurrence of the search
//use .replaceAll if more replacements are required
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

//before .replaceAll existed:
//we used REGEX
console.log(announcement.replace(/door/g, 'gate'));

// Booleans - .includes() .startsWith() .endsWith()
const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320')); // true
console.log(newPlane.includes('Boeing')); // false

console.log(newPlane.startsWith('Air')); // true

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

// PRACTICE EXERCISE
//is the baggage allowed to be checked in?
const checkBaggage = (items) => {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('Not allowed to board');
  } else {
    console.log('Welcome aboard');
  }
};
checkBaggage('I have a Laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// SPLIT METHOD .split()
//allows us to split a string into multiple parts, based on a
//divider string. This returns an array.

console.log('a+very+nice+string'.split('+'));
console.log('Mitch Riccio'.split(' '));

const [firstName, lastName] = 'Mitch Riccio'.split(' ');

// JOIN METHOD .join('')

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//make the first letter of each name a capital
const capitalizeName = (name) => {
  const names = name.split(' ');
  let result = [];
  for (const n of names) {
    result.push(n[0].toUpperCase() + n.slice(1));
  }
  return result.join(' ');
};
console.log(capitalizeName('Jessica ann smith davis'));
console.log(capitalizeName('mitchell daniel riccio'));

//do it another way for fun
const capitalName = (name) => {
  const names = name.split(' ');
  const result = [];
  for (const n of names) {
    result.push(n.replaceAll(n[0], n[0].toUpperCase()));
  }
  return result.join(' ');
};
console.log(capitalName('mitchell daniel riccio'));

// PADDING A STRING
//add a number of characters to a string until it has a desired length
const message = 'Go to gate 23';
//the 1st argument specifies what you want the length of the str to be
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Mitch'.padStart(20, '+').padEnd(30, '+'));

//practical example
//credit card padding!

const maskCreditCard = (number) => {
  return String(number).slice(-4).padStart(String(number).length, '*');
};
console.log(maskCreditCard(123123123123)); // ********3123
console.log(maskCreditCard('456456456456')); // ********6456
console.log(maskCreditCard(12345678)) // ****5678

// REPEAT METHOD .repeat()
//argument specifies how many times you'd like to repeat
const message2 = 'Bad weather... All Departures Delayed. '
console.log(message2.repeat(5))

const planesInLine = (n) => {
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`)
}
planesInLine(8)
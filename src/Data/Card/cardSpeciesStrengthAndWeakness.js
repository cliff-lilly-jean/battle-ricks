// Todo: Finish cardSpeciesStrengthWeakness object
/*
#### Try computed properties in javascript to use the type ex.

ex1.
let human = prompt("Which fruit to buy?", "apple");
let bag = {
  [human]: 5, // the name of the property is taken from the variable fruit
};
alert( bag.human ); // 5 if

ex2.
let type = 'human';
let bag = {
  [human + '-']: 5 // bag.human- = 5
};

['Disease', 'Humanoid', 'Alien'],

*/

const randomHitPointCalculator = (hitPoint) => {
 return Math.floor(Math.random() * hitPoint);
};


const cardSpeciesStrengthWeakness = {
 'Human': {
  strongAgainst: {
   "Animal": () => {
    return randomHitPointCalculator(250);
    // console.log(randomHitPointCalculator(250));
   },
   "Robot": () => {
    console.log(randomHitPointCalculator(50));
   }
  },
  weakAgainst: {
   "Disease": () => {
    console.log(randomHitPointCalculator(-250));
   },
   "Humanoid": () => {
    console.log(randomHitPointCalculator(-50));
   },
   "Alien": () => {
    console.log(randomHitPointCalculator(-100));
   },
  },
  resistantAgainst: {
   "Poopybutthole": () => {
    console.log(randomHitPointCalculator(0));
   },
  },
 },
 'Alien': {
  strongAgainst: ['Human', 'Disease'],
  weakAgainst: ['Poopybutthole', 'Mythological Creature', 'Cronenberg'],
  resistantAgainst: ['unknown']
 }

};

export default cardSpeciesStrengthWeakness;
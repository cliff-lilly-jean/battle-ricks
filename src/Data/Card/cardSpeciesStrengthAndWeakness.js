// Todo: Finish cardSpeciesStrengthWeakness object
/*
#### Try computed properties in javascript to use the type ex.

ex1.
let human = prompt("Which fruit to buy?", "apple");
let bag = {
  [human]: 5, // the name of the property is taken from the variable fruit
};
alert( bag.human ); // 5 if

test ex.
const cardStrengths = {
  [Human]: {
    strongerThan: ["Robot", "Animal"]
  },
  [Alien]: {
    strongerThan: ["Robot", "Animal", "Human", "Humanoid"]
  },
}

ex2.
let type = 'human';
let bag = {
  [human + '-']: 5 // bag.human- = 5
};

['Disease', 'Humanoid', 'Alien'],

*/


const cardStrengths = {
  ['Human']: {
    strongerThan: ["Robot", "Animal"]
  },
  ['Alien']: {
    strongerThan: ["Robot", "Animal", "Human", "Humanoid"]
  },
};

const cardWeakness = {
  ['Human']: {
    strongerThan: ["Robot", "Animal"]
  },
  ['Alien']: {
    strongerThan: ["Robot", "Animal", "Human", "Humanoid"]
  },
};

export { cardStrengths, cardWeakness };
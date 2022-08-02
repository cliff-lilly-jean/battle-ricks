
const cardStrengthsAndWeaknesses = {
  ['Human']: [
    {
      strongAgainst: ["Robot", "Animal"],
      weakAgainst: ["Alien", "Humanoid", "Mythological Creature", "Disease"],
      resistantAgainst: ["Poopybutthole", "Cronenberg"]
    }
  ],
  ['Alien']: [
    {
      strongAgainst: ["Alien", "Humanoid", "Mythological Creature", "Disease"],
      weakAgainst: ["Mythological Creature"],
      resistantAgainst: ["Disease"]
    }
  ],
  ['Humanoid']: [
    {
      strongAgainst: ["Poopybutthole", "Human"],
      weakAgainst: ["Alien", "Disease"],
      resistantAgainst: ["unknown"]
    }
  ],
  ['Poopybutthole']: [
    {
      strongAgainst: ["Disease"],
      weakAgainst: ["Humanoid"],
      resistantAgainst: ["unknown"]
    }
  ],
  ['Mythological Creature']: [
    {
      strongAgainst: ["Alien", "Robot", "Cronenberg"],
      weakAgainst: [],
      resistantAgainst: ["unknown"]
    }
  ],
  ['Animal']: [
    {
      strongAgainst: ["Disease"],
      weakAgainst: ["Human", "Alien", "Humanoid",],
      resistantAgainst: ["Animal"]
    }
  ],
  ['Cronenberg']: [
    {
      strongAgainst: ["Disease"],
      weakAgainst: ["Human", "Alien", "Humanoid",],
      resistantAgainst: ["Animal"]
    }
  ],
  ['Disease']: [
    {
      strongAgainst: ["Human", "Humanoid"],
      weakAgainst: ["Alien"],
      resistantAgainst: ["Animal"]
    }
  ],
  ['unknown']: [
    {
      strongAgainst: [],
      weakAgainst: [],
      resistantAgainst: []
    }
  ],
  ['Robot']: [
    {
      strongAgainst: [],
      weakAgainst: ["Human"],
      resistantAgainst: ["Disease"],
    }
  ],
};


export default cardStrengthsAndWeaknesses;
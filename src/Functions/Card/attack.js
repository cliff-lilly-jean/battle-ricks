

const attack = (attackCardType, attackCardAttackPoints, enemyCardType, cardStrengthsObj) => {


    const userCardTypeStrongerThan = cardStrengthsObj[attackCardType];
    console.log(userCardTypeStrongerThan[0].strongAgainst);

};

export default attack;
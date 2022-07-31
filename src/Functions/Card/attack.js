

const attack = (attackCardType, attackCardAttackPoints, enemyCardType, cardStrengthsObj) => {
    const userCardTypeStrongerThan = cardStrengthsObj[attackCardType].strongerThan;


    let cardAttack = userCardTypeStrongerThan.find(enemyCard => {
        if (enemyCard === enemyCardType) {
            let attackBonus = Math.floor(Math.random() * 150);
            let attackWithBonus = attackCardAttackPoints + attackBonus;
            console.log(attackWithBonus);
            return attackWithBonus;
        }
        else {
            console.log(attackCardAttackPoints);
            return attackCardAttackPoints;
        }
    });

    return cardAttack;
};

export default attack;


const attack = (attackCardSpecies, attackCardAttackPoints, enemyCardSpecies, enemyCardFace, enemyCardPosition, cardStrengthsObj) => {

    // TODO:
    // Determine Enemy card face
    // Determine enemy card position
    // Make logic for facedown attack and defense, faceup attack and defense


    // Determine if attack card species is stronger than enemy card species
    const strongerThanArr = cardStrengthsObj[attackCardSpecies][0].strongAgainst;
    let res = strongerThanArr.find(enemy => enemy === enemyCardSpecies);
    if (strongerThanArr.length <= 0) {
        return attackCardAttackPoints;
    } else if (res === undefined) {
        return attackCardAttackPoints;
    } else {
        let attackBonus = Math.floor(Math.random() * 200);
        let totalAttackWithBonus = attackCardAttackPoints + attackBonus;
        return totalAttackWithBonus;
    }

};

export default attack;
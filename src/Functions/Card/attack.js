

const attack = (attackCardSpecies, attackCardAttackPoints, enemyCardSpecies, enemyCardFace, enemyCardPosition, enemyCardDefensePoints, cardStrengthsObj) => {

    // Get the player to select an enemyCard
    // 
    // const strongerThanArr = cardStrengthsObj[attackCardSpecies][0].strongAgainst;
    // // Determine Enemy card face

    // // If enemyCardFace is true, the card is face down
    // if (enemyCardFace === true) {
    //     // TODO: call a flip card animation function

    //     // If enemyCardPosition is false, the card is in defense position
    //     if (enemyCardPosition === false) {


    //         // Determine if attack card species is stronger than enemy card species
    //         let res = strongerThanArr.find(enemy => enemy === enemyCardSpecies);
    //         let totalAttack = attackCardAttackPoints - enemyCardDefensePoints;

    //         if (strongerThanArr.length <= 0) {
    //             return totalAttack;
    //         } else if (res === undefined) {
    //             return totalAttack;
    //         } else {
    //             let attackBonus = Math.floor(Math.random() * 200);
    //             let totalAttackWithBonus = (attackCardAttackPoints + attackBonus) - enemyCardDefensePoints;
    //             return totalAttackWithBonus;
    //         }
    //     }
    // }



    // Determine enemy card position
    // Make logic for facedown attack and defense, faceup attack and defense




};

export default attack;
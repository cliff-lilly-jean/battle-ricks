const buildACard = (deckArr, color, icon, face, position, faceStateFunc, positionStateFunc) => {
    return deckArr.map((card) => {
        return (


            // TODO: Need to extract this function and place into the Cards component; give all the values to Card and use with a key to get each individual Card


            <div onClick={() => console.log(card.id)} className='my-4' style={{ background: color[card.species] }} key={card.id}>
                <div>{`Name: ${card.name}`}</div>
                <div>{`Species: ${card.species}`}</div>
                <div>{`Attack: ${card.attack}`}</div>
                <div>{`Defense: ${card.defense}`}</div>
                <div>{`Status: ${card.status}`}</div>
                <div><img src={icon[card.gender]} alt="Gender icon" width="25" /></div>
                <div><img src={card.image} alt="" /></div>
                <div>{`Location: ${card.location}`}</div>
                <div>{`Card Face: ${face}`}</div>
                <div>{`Card Position: ${position}`}</div>
                <button onClick={() => console.log(`card attacked: ${card.attack}`)} style={{ margin: "5px auto", display: "block", padding: "15px", background: "#44acba" }} >ATK</button>
                <button onClick={() => positionStateFunc(!position)} style={{ margin: "5px auto", display: "block", padding: "15px", background: "#44acba" }} >Set Attack position</button>
                <button onClick={() => console.log(`card face: ${face}`)} style={{ margin: "5px auto", display: "block", padding: "15px", background: "#44acba" }} >Set Face</button>
            </div>
        );
    });
};

export default buildACard;
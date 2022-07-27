const buildACard = (deckArr, color, icon, face, position, faceStateFunc, positionStateFunc) => {
    return deckArr.map((card) => {
        return (
            <div onClick={() => console.log(card.id)} className='my-4' style={{ background: color[card.species] }} key={card.id}>
                <div>{`Name: ${card.name}`}</div>
                <div>{`Species: ${card.species}`}</div>
                <div>{`Attack: ${card.attack}`}</div>
                <div>{`Defense: ${card.defense}`}</div>
                <div>{`Status: ${card.status}`}</div>
                <div><img src={icon[card.gender]} alt="Gender icon" width="25" /></div>
                <div>{`Image: ${card.image}`}</div>
                <div>{`Location: ${card.location}`}</div>
                <div>{`Card Face: ${face}`}</div>
                <div>{`Card Position: ${position}`}</div>
                <button onClick={() => console.log(`card attacked: ${card.attack}`)} style={{ margin: "5px auto", display: "block", padding: "15px", background: "#44acba" }} >ATK</button>
                <button onClick={() => console.log(`card position: ${positionStateFunc(!position)}`)} style={{ margin: "5px auto", display: "block", padding: "15px", background: "#44acba" }} >Set Attack position</button>
                <button onClick={() => console.log(`card face: ${faceStateFunc(!face)}`)} style={{ margin: "5px auto", display: "block", padding: "15px", background: "#44acba" }} >Set Face</button>
            </div>
        );
    });
};

export default buildACard;
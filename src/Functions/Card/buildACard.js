const buildACard = (deckArr, color, icon, face, position) => {
    return deckArr.map(card => {
        return (
            <div onClick={() => console.log(`Card: ${card.name}`)} className='my-4' style={{ background: color[card.species] }} key={card.id}>
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
                <button style={{ margin: "5px auto", display: "block", padding: "15px", background: "#44acba" }} >ATK</button>
                <button style={{ margin: "5px auto", display: "block", padding: "15px", background: "#44acba" }} >Set Attack position</button>
                <button style={{ margin: "5px auto", display: "block", padding: "15px", background: "#44acba" }} >Set Face</button>
            </div>
        );
    });
};

export default buildACard;
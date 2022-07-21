import React, { useEffect, useState } from 'react';
import Side from '../Side/Side';
import cpuUserNames from '../../Data/cpu-player-names-list.json';

const Field = ({ startTheGame }) => {

    // Setup Players
    // const user = prompt();
    const user = 'Cliff';

    const randomCharacterNumberForCpu = Math.floor(Math.random() * 4900);
    const cpu = cpuUserNames.names[randomCharacterNumberForCpu];


    return (
        <div>
            <Side typeOfPlayer={cpu} />
            <Side typeOfPlayer={user} />
            <button className=' mx-auto block bg-gray-600 p-4 from-neutral-200 rounded-md' onClick={() => startTheGame()}>Start Game</button>
        </div>
    );
};

export default Field;
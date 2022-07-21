import React, { useEffect, useState } from 'react';
import Side from '../Side/Side';
import cpuUserNames from '../../Data/cpu-player-names-list.json';

const Field = () => {

    // Setup Players
    // const user = prompt();
    const user = 'Cliff';

    const randomCharacterNumberForCpu = Math.floor(Math.random() * 4900);
    const cpu = cpuUserNames.names[randomCharacterNumberForCpu];


    return (
        <div>
            <Side typeOfPlayer={cpu} />
            <Side typeOfPlayer={user} />
        </div>
    );
};

export default Field;
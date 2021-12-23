import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import WorldClock from './WorldClock';

const timeZones = [
    {
        name: '',
        zone: 'America/Los_Angeles',
        id: 1,
        utcOffset: 1
    },
    {
        name: '',
        zone: 'Europe/London',
        id: 2,
        utcOffset: -2
    },
    {
        name: '',
        zone: 'Asia/Kolkata',
        id: 3,
        utcOffset: 5.5
    },
    {
        name: '',
        zone: 'Australia/ACT',
        id: 4,
        utcOffset: -4
    },
    {
        name: '',
        zone: 'Canada/Atlantic',
        id: 5,
        utcOffset: -6
    },
    {
        name: '',
        zone: 'Asia/Kuwait',
        id: 6,
        utcOffset: -4
    }
]

function Home() {

    const navigate = useNavigate();

    const openClock = (clock) => {
        navigate(`/${clock.id}`, {state: clock});
    }

    return (
        <div className="worldclocks">
            {
                timeZones.map(time => (<WorldClock key={time.id} time={time} onClick={(clock) => openClock(clock)} />))
            }
        </div>
    )
}

export default Home

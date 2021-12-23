import React, { useState } from 'react'

import 'moment-timezone';
import moment from 'moment';

function WorldClock({ time, onClick }) {
    const timestamp = moment().tz(time.zone);
    const [hours, setHours] = useState(timestamp.hours())
    const [minutes, setMinutes] = useState(timestamp.minutes())
    const [seconds, setSeconds] = useState(timestamp.seconds())

    setInterval(() => {
        const newTime = timestamp.add(1, 's');
        setHours(newTime.hours());
        setMinutes(newTime.minutes());
        setSeconds(newTime.seconds());
    }, 1000);

    return (
        <div className='clock-container' onClick={() => { onClick(time) }}>
            {/* <Moment format="HH:mm:ss" interval={1000} tz={time.zone} /> */}
            <span>{`${hours} : ${minutes} : ${seconds}`}</span>
            <div className="circle">
                <div className="hours" ></div>
                <div className="minutes"></div>
                <div className="seconds"></div>
            </div>
            <label>{time.zone}</label>
        </div>
    )
}

export default WorldClock

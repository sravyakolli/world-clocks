import React from 'react'

import Moment from 'react-moment';
import 'moment-timezone';

function WorldClock({ time, onClick }) {
    const day = Date.UTC();
    console.log(day);
    return (
        <div className='clock-container' onClick={() => {onClick(time)}}>
            <Moment format="HH:mm:ss" interval={1000} tz={time.zone} />
            <div class="circle">
                <div class="hours" ></div>
                <div class="minutes"></div>
                <div class="seconds"></div>
            </div>
            <label>{time.zone}</label>
        </div>
    )
}

export default WorldClock

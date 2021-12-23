import React from 'react'
import { useLocation } from 'react-router-dom'

function Clock() {
    const {state} = useLocation()
    return (
        <div>
            Bigger Clock {state.zone}
        </div>
    )
}

export default Clock

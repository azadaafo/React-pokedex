import React, { useState } from 'react'

const CaughtPokemon = ({ date }) => {
    const [totalCaught, setTotalCaught] = useState(0);
    function IncrementTotal() {
        setTotalCaught(totalCaught + 1);
    }
    return (
        <p>
            Caught {totalCaught} Pokemon on {date}
            <button onClick={IncrementTotal}> Increment</button>
        </p>
    )
}
export default CaughtPokemon;
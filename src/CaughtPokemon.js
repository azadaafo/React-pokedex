import React, { useState } from 'react'

const CaughtPokemon = ({ date }) => {
    const [totalCaught, setTotalCaught] = useState(0);
    function Counter() {
        setTotalCaught(totalCaught + 1);
    }
    return (
        <p>
            Caught {Counter} Pokemon on {date}
        </p>
    )
}
export default CaughtPokemon;
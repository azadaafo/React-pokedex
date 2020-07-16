import React from 'react'

function CaughtPokemon(props) {
    console.log(props);
    return <p>Caught 0 Pokemon on {props.date}</p>
}

export default CaughtPokemon;
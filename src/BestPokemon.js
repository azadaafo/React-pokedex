import React from 'react'

function BestPokemon(props) {
    console.log(props);
    return (
        <div>
            <p>My favourite Pokemon is Squirtle</p>
            <ul>
                {props.abilities.map(ability => <li>{ability}</li>)}
            </ul>
        </div>
    )
}

export default BestPokemon;
import React, { useState, useEffect } from 'react'

const BestPokemonFetcher = () => {
    const [bestPokemon, setBestPokemon] = useState(null);

    useEffect(() => {
        fetch(
            'https://pokeapi.co/api/v2/pokemon/1/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBestPokemon(data)
            })
    }, []);

    if (!bestPokemon) {
        return null
    } else {
        return <BestPokemon pokemon={bestPokemon} />;
    }
}

const BestPokemon = ({ pokemon }) => {
    return (
        <div>
            <p>My favourite Pokemon is {pokemon.name}</p>
            <ul>
                {pokemon.abilities.map((ability, index) => {
                    return <li key={index}>{ability.ability.name}</li>
                })}
            </ul>
        </div>
    )
}

export default BestPokemonFetcher;
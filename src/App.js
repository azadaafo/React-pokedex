import React from 'react'

function CaughtPokemon() {
  const date = new Date().toLocaleDateString()
  return <p>Caught 0 Pokemon on {date}</p>
}

const Logo = () => {
  const appName = "Pokedex";
  return (
    <header>
      <h1>Welcome to the {appName}</h1>
      <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png' alt='' />
    </header>
  )
}

function BestPokemon() {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>
        {abilities.map(ability => <li>{ability}</li>)}
      </ul>
    </div>
  )
}

function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>

  )
}

export default App;

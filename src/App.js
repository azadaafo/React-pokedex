import React from 'react';
import Logo from './Logo';
import CaughtPokemon from './CaughtPokemon';
import BestPokemon from './BestPokemon';

function App(props) {
  return (
    <div>
      <Logo appName="Pokedex" />
      <BestPokemon abilities={['Anticipation', 'Adaptability', 'Run-Away']} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>

  )
}

export default App;

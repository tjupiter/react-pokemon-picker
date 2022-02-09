import React from 'react';

function PokemonList({ pokemon }) {
    //  console.log(pokemon)
  return (
    <div className="pokemon-container">
        {pokemon.map(poke => (
            <div key={poke} className='pokemon'>{poke}</div>
        ))}
    </div>);
}

export default PokemonList;

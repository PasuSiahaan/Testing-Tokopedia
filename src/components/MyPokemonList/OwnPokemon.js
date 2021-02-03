import React from 'react';

//import css
import "./OwnPokemon.css"

const OwnPokemon = (props) => {
    return (
        <div className="pokemon">
            <p className="own-pokemon-name">{props.pokemonName}</p>
            <p className="actual-pokemon-name-place">Actual pokemon Name: <strong className="actual-pokemon-name">{props.actualPokemonName}</strong></p>
        </div>
    )
}

export default OwnPokemon;
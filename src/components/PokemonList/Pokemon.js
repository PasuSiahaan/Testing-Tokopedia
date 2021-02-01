import React from 'react';

//import css
import "./Pokemon.css"

const Pokemon = (props) => {
    return (
        <div className="pokemon">
            <p>{props.pokemonName}</p>
            <p>Own: 0</p>
        </div>
    )
}

export default Pokemon;
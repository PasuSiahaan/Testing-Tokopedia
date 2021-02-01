import React from 'react';
import { useHistory } from "react-router-dom";

//import css
import "./Pokemon.css"

const Pokemon = (props) => {
    let history = useHistory();

    function getPokemonDetail (pokemonName) {
        history.push(`/pokemon-detail/${pokemonName}`)
    }
    return (
        <div className="pokemon" onClick={() => getPokemonDetail(props.pokemonName)}>
            <p>{props.pokemonName}</p>
            <p>Own: 0</p>
        </div>
    )
}

export default Pokemon;
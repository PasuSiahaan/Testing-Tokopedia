import React from 'react';
import { useHistory } from "react-router-dom";

//import css
import "./Pokemon.css"

const Pokemon = (props) => {
    let history = useHistory();
    let pokemonOwn = getPokemonOwn();

    function getPokemonOwn(){
        let a = props.myDataPokemon.filter((data)=>{return data.actualPokemonName === props.pokemonName}).length
        return a
    }

    function getPokemonDetail (pokemonName) {
        history.push(`/pokemon-detail/${pokemonName}`)
    }
    return (
        <div className="pokemon" onClick={() => getPokemonDetail(props.pokemonName)}>
            <p className="pokemon-name">{props.pokemonName}</p>
            <p className="pokemon-own">Own: {pokemonOwn}</p>
        </div>
    )
}

export default Pokemon;
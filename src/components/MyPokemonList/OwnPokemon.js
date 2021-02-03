import axios from 'axios';
import React from 'react';

//import css
import "./OwnPokemon.css"

const OwnPokemon = (props) => {
    function removePokemon() {
        axios.delete(`https://my-pokemon-list.herokuapp.com/api/${props.pokemonId}`).then(res=>{
            props.deletePokemon(props.pokemonId)
        })
    }
    return (
        <div className="own-pokemon">
            <p className="own-pokemon-name">{props.pokemonName}</p>
            <p className="actual-pokemon-name-place">Actual pokemon Name: <strong className="actual-pokemon-name">{props.actualPokemonName}</strong></p>
            <div className="btn-remove-div">
                <button className="remove-btn" onClick={removePokemon}>Remove</button>
            </div>
        </div>
    )
}

export default OwnPokemon;
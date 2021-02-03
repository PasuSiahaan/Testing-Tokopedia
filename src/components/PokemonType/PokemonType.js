import React from "react"
import "./PokemonType.css"

let backgroundColor = {
    "normal":"#9baba1",
    "fighting": "#f5b153",
    "flying": "#8febc9",
    "poison": "#b753f5",
    "ground": "#e8a735",
    "rock": "#915c00",
    "bug": "#1e9911",
    "ghost": "#52425c",
    "steel": "#8c8c8c",
    "fire": "#ff1919",
    "water": "#196dff",
    "grass": "#36ff21",
    "electric": "#f8ff2e",
    "psychic": "#ffce2e",
    "ice": "#4affed",
    "dragon": "#fa5332",
    "dark": "#757272",
    "fairy": "#ffb5f3",
    "unknown": "#4e4e52",
    "shadow": "#757575"
}

function getBackgrounColor(type) {
    if(backgroundColor[type]) {
        return backgroundColor[type];
    }
    return "#ffffff";
}

const PokemonType = (props) => {
    
    let backgroundColorStyle = {
        "backgroundColor":getBackgrounColor(props.type)
    }
    return (
        <div className="pokemon-type" style={backgroundColorStyle}>
            {props.type}
        </div>
    )
}

export default PokemonType;
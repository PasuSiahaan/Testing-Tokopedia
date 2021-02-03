import React from 'react'

//css
import './PokemonMoveList.css'

const PokemonMoveList = (prop) => {
    return (
        <div className="pokemon-move-list">
            <h4 >Move List</h4>
            <div className="move">
                {prop.move.map(move=>(
                    <div className="move-name" key={move.move.name}> {move.move.name} </div> 
                ))}
            </div>
        </div>
    )
}


export default PokemonMoveList
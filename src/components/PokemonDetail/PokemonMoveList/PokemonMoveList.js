import React from 'react'

//css
import './PokemonMoveList.css'

const PokemonMoveList = (prop) => {
    return (
        <div className="pokemon-move-list">
            <h3 >Move List</h3>
            <div className="move">
                {prop.move.map(move=>(
                    <div className="tag" key={move.move.name}> {move.move.name} </div> 
                ))}
            </div>
        </div>
    )
}


export default PokemonMoveList
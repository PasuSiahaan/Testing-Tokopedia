import React, {Fragment} from 'react'
import {useParams} from "react-router-dom";
import { gql, useQuery } from '@apollo/client';

//css
import "./PokemonDetail.css"

//component
import Loading from '../../../components/Loading/Loading';
import Error from '../../../components/Error/Error';
import PokemonType from '../../../components/PokemonType/PokemonType';
import PokemonMoveList from '../../../components/PokemonDetail/PokemonMoveList/PokemonMoveList'
import PokemonDetailPopUp from '../../PokemonDetailPopUp/PokemonDetailPopUp'

const GET_POKEMON_DETAIL = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            height
            weight
            sprites {
                front_default
            }
            moves {
                move {
                name
                }
            }
            types {
                type {
                name
                }
            }
        }
    }
`;

const PokemonDetail = () => {
    let { pokemonName } = useParams();
    

    
    const { loading, data } = useQuery(GET_POKEMON_DETAIL, {
        variables: {"name": pokemonName},
      });
    
    if(loading){
        return(<Loading />) 
    }
    if(data.pokemon.id === null){
        return(<Error error={`There isn't pokemon with name "${pokemonName}"`}/>)
    }
    return (
        <Fragment>
            <h1 className="title-center">{data.pokemon.name}</h1>
            <div className="pokemon-detail">
                <div className="pokemon-image-div">
                    <img className="pokemon-image" src={data.pokemon.sprites.front_default}/>
                </div>
                <div className="pokemon-detail-div">
                    <div>
                        <p>Types</p>
                        <div className="pokemon-type-list">
                            {data.pokemon.types.map(res=>(
                                <PokemonType key={res.type.name} type={res.type.name} alt={res.type.name}/>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p>Height: {data.pokemon.height*10} cm</p>
                    </div>
                    <div>
                        <p>Weight: {data.pokemon.weight/10} kg</p>
                    </div>
                </div>
                <PokemonMoveList move={data.pokemon.moves} />
            </div>
            <PokemonDetailPopUp name={data.pokemon.name}/>
            
        </Fragment>
    )
}

export default PokemonDetail
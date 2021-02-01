import React, {Fragment} from 'react'
import {useParams} from "react-router-dom";
import { gql, useQuery } from '@apollo/client';

//css
import "./PokemonDetail.css"

//component
import Loading from '../../../components/Loading/Loading';
import Error from '../../../components/Error/Error';

const GET_POKEMON_DETAIL = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            
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
    console.log(data.pokemon)
    return (
        <Fragment>
            <h3 className="text-center">{data.pokemon.name}</h3>
        </Fragment>
    )
}

export default PokemonDetail
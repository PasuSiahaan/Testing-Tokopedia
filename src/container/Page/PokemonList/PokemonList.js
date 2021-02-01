import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';

//import css
import './PokemonList.css'

//import component
import Pokemon from '../../../components/PokemonList/Pokemon';

const GET_POKEMON_LIST = gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            count
            nextOffset
            prevOffset
            results {
                id
                name
            }
        }
    }
`;


const PokemonList = () => {
    const { loading, error, data } = useQuery(GET_POKEMON_LIST, {
        variables: { "limit": 100, "offset":0 },
      });
      
    
    if(loading){
        return(
            <div>
                loading
            </div>
        )
    }
    if(error){
        return(
            <div>
                {error.message}
            </div>
        )
    }
    
    return(
        <Fragment>
            <p>ini adalah list pokemon</p>
            <div className="list-pokemon">
                {data.pokemons.results.map(pokemonData=>(
                    <Pokemon key={pokemonData.id} pokemonName={pokemonData.name} />
                ))}
            </div>
        </Fragment>
    )
}

export default PokemonList;
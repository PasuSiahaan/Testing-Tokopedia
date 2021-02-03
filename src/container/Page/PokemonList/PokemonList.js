import React, { Fragment, useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import axios from 'axios';

//import css
import './PokemonList.css'

//import component
import Pokemon from '../../../components/PokemonList/Pokemon';
import Loading from '../../../components/Loading/Loading';
import Error from '../../../components/Error/Error'

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
    
    const [myDataPokemon,setMyDataPokemon] = useState([])
    useEffect(() => {
        axios.get('https://my-pokemon-list.herokuapp.com/api/').then(res=>{
            setMyDataPokemon(res.data)
        })
    }, []);

    const { loading, error, data } = useQuery(GET_POKEMON_LIST, {
        variables: { "limit": 100, "offset":0 },
      });
      
    
    if(loading){
        return(<Loading/>)
    }
    if(error){
        return(<Error error={error.message}/>)
    }
    return(
        <Fragment>
            <h1 className="title-center">List of Pokemon</h1>
            <div className="list-pokemon">
                {data.pokemons.results.map(pokemonData=>(
                    <Pokemon key={pokemonData.id} pokemonName={pokemonData.name} myDataPokemon={myDataPokemon}/>
                ))}
            </div>
        </Fragment>
    )
}

export default PokemonList;
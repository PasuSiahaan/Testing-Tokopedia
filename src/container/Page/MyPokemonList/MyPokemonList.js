import React, {useEffect,useState,Fragment} from 'react'
import axios from 'axios';

//css
import './MyPokemonList.css'

//component
import Loading from '../../../components/Loading/Loading';
import Error from '../../../components/Error/Error'
import OwnPokemon from '../../../components/MyPokemonList/OwnPokemon'


const ConditionalForList = (prop) => {
    let myDataPokemon = prop.data
    
    if(myDataPokemon.length === 0) {
        return(<h3>There isn't pokemon that you have caught. Go and catch a pokemon</h3>)
    }
    
    else {
        return(
            <Fragment>
                {myDataPokemon.map(pokemonData=>(
                    <OwnPokemon key={pokemonData.id} pokemonName={pokemonData.pokemonName} actualPokemonName={pokemonData.actualPokemonName} pokemonId={pokemonData.id} deletePokemon={(pokemonId => prop.deletePokemon(pokemonId))} />
                ))}
            </Fragment>
        )
    }
}

const MyPokemonList = () => {
    const [myDataPokemon,setMyDataPokemon] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")
    function deletePokemon(pokemonId) {
        let myDataPokemon2 = myDataPokemon.filter((data)=>{
            return data.id !== pokemonId
        })
        console.log(myDataPokemon2)
        setMyDataPokemon(myDataPokemon2)
    }
    useEffect(() => {
        setLoading(true)
        axios.get('https://my-pokemon-list.herokuapp.com/api/').then(res=>{
            setMyDataPokemon(res.data)
            setLoading(false)
        }).catch(error => {
            setLoading(false)
            setError(error.message)
        })
    }, []);
    if(loading){
        return(<Loading/>)
    }
    if(error){
        return(<Error error={error}/>)
    } 
    return (
        <Fragment>
            <h1 className="title-center">My Pokemon List</h1>
            <div className="my-list-pokemon">
                <ConditionalForList data={myDataPokemon} deletePokemon={(pokemonId) => deletePokemon(pokemonId)}/>
            </div>
        </Fragment>
    )
}

export default MyPokemonList;
import React, {Fragment, useState} from 'react'
import Modal from 'react-awesome-modal';
import axios from 'axios';

import './PokemonDetailPopUp.css';



const PokemonDetailPopUp = (prop) => {
    const [popupCatchForm,setPopupCatchForm] = useState(false)
    const [popupCatchFailed,setPopupCatchFailed] = useState(false)
    const [pokemonName, setPokemonName] = useState("")


    function closeForm() {
        setPopupCatchForm(false)
    }

    function closeCatchFailed() {
        setPopupCatchFailed(false)
    }
    function catchPokemon() {
        let a = Math.floor(Math.random()*2)
        if(a) {
            setPopupCatchForm(true)
        }
        else {
            setPopupCatchFailed(true)
        }
    }
    function handlePokemonNameChange(event) {
        setPokemonName(event.target.value)
    }

    function findPokemonName(value) {
        return value.pokemonName === pokemonName
    }

    function submitForm() {
        axios.get('http://my-pokemon-list.herokuapp.com/api/').then(res=>{
            let pokemonNameList = res.data
            let pokemonData = pokemonNameList.find(findPokemonName)
            if(pokemonData === undefined) {
                let formData = {'pokemonName':pokemonName,'actualPokemonName':prop.name}
                axios.post("http://my-pokemon-list.herokuapp.com/api/",formData).then(res1=>{
                    setPopupCatchForm(false)
                })
            }
            else {
                console.log("nama sudah ada")
            }
        })
    }

    return(
        <Fragment>
            <div className="catch-bottom-div">
                <button className="catch-bottom" onClick={()=>catchPokemon()}>Catch</button>
            </div>
            <div>
                <Modal 
                    visible={popupCatchForm}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={closeForm}
                >
                    <div className="pokemon-form">
                        <h1>Failed</h1>
                        <label htmlFor="pokemon-name">Pokemon Name</label>
                        <input type="text" name="pokemon-name" placeholder="pokemon name" onChange={handlePokemonNameChange}></input>
                        <button className="btn-submit" onClick={submitForm}>Submit</button>
                    </div>
                </Modal>
                <Modal 
                    visible={popupCatchFailed}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={closeCatchFailed}
                >
                    <div>
                        <h1>Failed</h1>
                        <p>Some Contents</p>
                    </div>
                </Modal>
            </div>
        </Fragment>
        
    )
}

export default PokemonDetailPopUp;
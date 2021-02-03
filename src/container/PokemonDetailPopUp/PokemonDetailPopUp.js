import React, {Fragment, useState} from 'react'
import Modal from 'react-awesome-modal';
import axios from 'axios';

import './PokemonDetailPopUp.css';



const PokemonDetailPopUp = (prop) => {
    const [popupCatchForm,setPopupCatchForm] = useState(false)
    const [popupCatchFailed,setPopupCatchFailed] = useState(false)
    const [pokemonName, setPokemonName] = useState("")
    const [status, setStatus] = useState("")


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
        setStatus("")
        axios.get('https://my-pokemon-list.herokuapp.com/api/').then(res=>{
            let pokemonNameList = res.data
            let pokemonData = pokemonNameList.find(findPokemonName)
            if(pokemonData === undefined) {
                let formData = {'pokemonName':pokemonName,'actualPokemonName':prop.name}
                axios.post("https://my-pokemon-list.herokuapp.com/api/",formData).then(res1=>{
                    setPopupCatchForm(false)
                    setPokemonName("")
                })
            }
            else {
                setStatus(`there is pokemon with name '${pokemonName}'`)
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
                        <h1 className="text-center">Success to catch</h1>
                        <h3 className="description">Please enter your pokemon name</h3>
                        <div className="row">
                            <label htmlFor="pokemon-name">Pokemon Name</label>
                            <input type="text" name="pokemon-name" className="pokemon-input" placeholder="pokemon name" value={pokemonName} onChange={handlePokemonNameChange}></input>
                            <small className="small-text">{status}</small>
                        </div>
                        <div className="button-submit-div">
                            <button className="btn-submit" onClick={submitForm}>Submit</button>
                        </div>
                    </div>
                </Modal>
                <Modal 
                    visible={popupCatchFailed}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={closeCatchFailed}
                >
                    <div className="failed-popup" onClick={closeCatchFailed}>
                        <div>
                            <h1 className="text-center fail-title">Failed</h1>
                            <div className="message">
                                <p className="text-center">Please try again</p>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </Fragment>
        
    )
}

export default PokemonDetailPopUp;
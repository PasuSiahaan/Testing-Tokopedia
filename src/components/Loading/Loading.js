import React, {Fragment} from 'react'
import "./Loading.css"
import logo from '../../asset/half-circle.gif'

const Loading = () => {
    return(
        <Fragment>
            <div className="loading-image-div">
                <img className="loading-image" src={logo} alt="loading ..."/>
            </div>
        </Fragment>
    )
}

export default Loading;
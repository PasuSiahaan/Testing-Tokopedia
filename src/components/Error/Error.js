import React from 'react'

const Error = (error) => {
    console.log(error)
    return(
        <div>
            <p className="text-center">{error.error}</p>
        </div>
    )
}

export default Error;
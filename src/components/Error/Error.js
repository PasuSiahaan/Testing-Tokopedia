import React from 'react'

const Error = (error) => {
    return(
        <div>
            <h3 className="text-center">{error.error}</h3>
        </div>
    )
}

export default Error;
import React from 'react'
import Loader from 'react-loader-spinner'

function Home() {
    return (
       
        <div>
            <h2> <i> WELCOME TO LEAVE MANAGEMENT TRACKER </i></h2>

             <Loader
        type="Rings"
        color="#00BFFF"
        height={100}
        width={100}
        
      /> 
        </div>
    )
}

export default Home

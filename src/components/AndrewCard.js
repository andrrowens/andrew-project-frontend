import React from 'react'


const AndrewCard = ( { id, name, background, description }) => {



  return (
    <div className="andrew-box" id={id}>
        <div className="andrew-card"> 
          {/* <h1 className="andrew-name">Andrew Owens</h1> */}

          <strong>Name: </strong>{name} <br/>
          <strong>Background: </strong>{background} <br/>
          <strong>Description: </strong>{description} <br/>
        </div>

    </div>
  )
}

export default AndrewCard
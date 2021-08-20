import React from 'react'
import './styles/Card.css'
const Card = ( { title, body, preBody }) => {
    return (
        <>
         <div className="card-container">
             <div className="title-container">
                <h3>{title}</h3>
             </div>
             <div className="body-container">
                 <h5>{preBody}</h5>
                <p>{body}</p>
             </div>
         </div>
        </>
    )
}

export default Card;

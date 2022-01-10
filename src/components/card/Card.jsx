import React from 'react'
import { Link } from 'react-router-dom'
import "./card.css"

function Card({char, addHeroe}) {
    return (
        <div className="card">
            <img src={char.image.url} className="card-img-top" alt={char.name}/>
            <div className="card-body">
                <h5 className={char.biography.alignment === "good" 
                ? "card-title text-success" 
                : char.biography.alignment==="bad" 
                ? "card-title text-danger" 
                : "card-title"}>
                    {char.name} ({char.biography.alignment})
                </h5>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link to={`/characters/${char.id}`} className="btn btn-secondary">Details</Link>
                    <button className='btn btn-primary' onClick={()=>{addHeroe(char.id)}}>Add to team</button>
                </div>
                
            </div>
        </div>
    )
}

export default Card

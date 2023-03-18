import React from 'react';
import './Card.css';

const Card = ({ type, price, validity, perks }) => {
    return (
        <div className='card'>
            <p>{type}</p>
            <p>Rs. {price} <span>({validity})</span> </p>

            {
                perks.map((perk, index) => {
                    return <p key={index}> <i className="fa fa-check-circle" aria-hidden="true"></i> {perk} </p>
                })
            }

            <button className='card-button'>JOIN NOW</button>
        </div>
    )
}

export default Card;
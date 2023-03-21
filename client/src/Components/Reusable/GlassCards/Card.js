import React from 'react';
import './Card.css';

const Card = ({ type, price, validity, perks }) => {

    const userMessage = `Hi, I am interested in ${validity} plan @Rs.${price}`;

    return (
        <div className='card'>
            <p>{type}</p>
            <p>Rs. {price} <span>({validity})</span> </p>

            {
                perks.map((perk, index) => {
                    return <p key={index}> <i className="fa fa-check-circle" aria-hidden="true"></i> {perk} </p>
                })
            }

            <a href={`https://wa.me/+918005012432?text=${userMessage}`} target='_blank' rel='noreferrer'><button className='card-button'>JOIN NOW</button></a>
        </div>
    )
}

export default Card;
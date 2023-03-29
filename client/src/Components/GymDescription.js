import React from 'react';
import { useEffect } from 'react';

const GymDescription = () => {

    const displayValues = [
        {
            number: 15,
            text: 'MACHINES'
        },
        {
            number: 60,
            text: 'MEMBERS JOINED'
        },
        {
            number: 30,
            text: 'PROGRAMS'
        }
    ];

    useEffect(() => {

        let interval = 3000;

        const elements = document.querySelectorAll('.animatedNumber');
        elements.forEach((displayValue) => {

            let startValue = 0,
                endValue = parseInt(displayValue.getAttribute('data-value')),
                duration = Math.floor(interval / endValue);

            let counter = setInterval(() => {
                startValue += 1;
                displayValue.textContent = `${startValue}+`;

                if (startValue === endValue)
                    clearInterval(counter);

            }, duration);
        });


    }, []);

    return (
        <div className='desc-grid-container'>

            {displayValues.map(({ number, text }, index) => {
                return <div className='grid-item' key={index}>
                    <span data-value={number} className='animatedNumber'>0+</span><br />
                    <span>{text}</span>
                </div>
            })}
        </div>
    )
}

export default GymDescription;
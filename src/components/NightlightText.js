import React from 'react';

const NightlightText = ({full_name, valueInSearch, date}) => {

    const parts = full_name.split(new RegExp(`(${valueInSearch})`, 'gi'));

    return (
        <div>
            <p>{parts.map((part, index) =>
                part.toLowerCase() === valueInSearch.toLowerCase()
                    ? <span key={index} className='highlight'>{part}</span>
                    : part)} | {date}
            </p>
        </div>
    );
}

export default NightlightText;
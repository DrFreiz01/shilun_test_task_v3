import React from 'react';

const NightlightText = ({ full_name, valueInSearch, date}) => {

    const getHighlightedText = () => {
        const parts = full_name.split(new RegExp(`(${valueInSearch})`, 'gi'));
        return <p>{parts.map(part =>
            part.toLowerCase() === valueInSearch.toLowerCase()
                ? <span className='highlight'>{part}</span>
                : part)} | {date}</p>;
    }


    return (
        <div>
            <div>{getHighlightedText()}</div>
        </div>
    );
};

export default NightlightText;
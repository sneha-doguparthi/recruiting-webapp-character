import { useState } from 'react';
import './App.css';

function Character({ character }) {
    const [attributeValues, setAttributeValues] = useState(character.attributes);
    const attributesTitle = "Attributes"

    const incrementAttributeValue = (attribute) => {
        setAttributeValues((prevValues) => ({
            ...prevValues,
            [attribute]: prevValues[attribute] + 1,
        }));
    };

    const decrementAttributeValue = (attribute) => {
        setAttributeValues((prevValues) => ({
            ...prevValues,
            [attribute]: prevValues[attribute] - 1,
        }));
    };

    return (
        <div >
            <h2>{character.name}</h2>
            <h2>{attributesTitle}</h2>
            {Object.keys(attributeValues).map((attribute) => (
                <div key={attribute}>
                    {attribute}:
                    <span>{attributeValues[attribute]}</span>
                    <button onClick={() => incrementAttributeValue(attribute)}>+</button>
                    <button onClick={() => decrementAttributeValue(attribute)}>-</button>
                </div>
            ))}
        </div>
    );
}

export default Character;

import { useMemo } from "react";

export function AttributeList({ attributeValues, incrementAttribute, decrementAttribute }) {
    const attributesTitle = "Attributes"
    const attributeModifier = "Attribute Modifier"

    const calculateModifier = useMemo(() => (value) => {
        return value > 10 ? Math.floor((value - 10) / 2) : Math.floor((value - 10));
    }, []);

    return <>
        <h2>{attributesTitle}</h2>
        {Object.keys(attributeValues).map((attribute) => (
            <div key={attribute}>
                {attribute}:
                <span>{attributeValues[attribute]}
                    ({attributeModifier}:{calculateModifier(attributeValues[attribute])})</span>
                <button onClick={() => incrementAttribute(attribute)}>+</button>
                <button onClick={() => decrementAttribute(attribute)}>-</button>
            </div>
        ))}

    </>
}
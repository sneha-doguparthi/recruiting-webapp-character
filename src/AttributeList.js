export function AttributeList({ attributeValues, incrementAttribute, decrementAttribute }) {
    const attributesTitle = "Attributes"

    return <>
        <h2>{attributesTitle}</h2>
        {Object.keys(attributeValues).map((attribute) => (
            <div key={attribute}>
                {attribute}:
                <span>{attributeValues[attribute]}</span>
                <button onClick={() => incrementAttribute(attribute)}>+</button>
                <button onClick={() => decrementAttribute(attribute)}>-</button>
            </div>
        ))}

    </>
}
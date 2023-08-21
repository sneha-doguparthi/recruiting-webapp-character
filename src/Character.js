import { useState, useMemo } from 'react';
import './App.css';
import {ClassList} from "./ClassList";
import { CLASS_LIST, } from './consts.js';
import { AttributeList } from './AttributeList';

function Character({ character }) {
  const [attributeValues, setAttributeValues] = useState(character.attributes);

  const incrementAttribute = (attribute) => {
      setAttributeValues((prevValues) => ({
        ...prevValues,
        [attribute]: prevValues[attribute] + 1,
      }));
  };

  const decrementAttribute = (attribute) => {
    setAttributeValues((prevValues) => ({
      ...prevValues,
      [attribute]: prevValues[attribute] - 1,
    }));
  };

  const doesCharacterMeetRequirements = useMemo(() => {
    return (className) => {
      const classAttributeValues = CLASS_LIST[className];
      return Object.keys(classAttributeValues).every(
        (attribute) => attributeValues[attribute] >= classAttributeValues[attribute]
      );
    };
  }, [attributeValues]);

  return (
    <div >
      <h2>{character.name}</h2>
      <AttributeList attributeValues={attributeValues} incrementAttribute={incrementAttribute} decrementAttribute={decrementAttribute} />
      <ClassList doesCharacterMeetRequirements={doesCharacterMeetRequirements}/>
    </div>
  );
}

export default Character;

import './App.css';
import { ATTRIBUTE_LIST } from './consts.js';
import Character from './Character';

function App() {
  const codingExerciseTitle = "React Coding Exercise"
  const attributeList = ATTRIBUTE_LIST.reduce((acc, attribute) => {
    acc[attribute] = 10;
    return acc;
  }, {});

  const characters = [
    { name: 'Character1', attributes: attributeList },
    { name: 'Character2', attributes: attributeList },
    { name: 'Character3', attributes: attributeList }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>{codingExerciseTitle}</h1>
      </header>
      <div className="character-container-wrapper">
        {characters.map((character, index) => (
          <section key={index} className="character-section">
            <Character character={character} />
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;

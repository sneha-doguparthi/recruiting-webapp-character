import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';


function App() {
  const codingExerciseTitle = "React Coding Exercise"
  const attributeList = ATTRIBUTE_LIST.reduce((acc, attribute) => {
    acc[attribute] = 10;
    return acc;
  }, {});

  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
      <h1>{codingExerciseTitle}</h1>
      </header>
      <section className="App-section">
        <div>
          Value:
          {num}
          <button>+</button>
          <button>-</button>
        </div>
      </section>
    </div>
  );
}

export default App;

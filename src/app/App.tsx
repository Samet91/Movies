import React from 'react';
import Title from './components/Title/Title';
import Inputs from './components/Inputs/Inputs';

function App(): JSX.Element {
  return (
    <div>
      <header>
        <Title>Movies to watch</Title>
      </header>
      <fieldset>
        <Inputs></Inputs>
      </fieldset>
    </div>
  );
}

export default App;

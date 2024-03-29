import React, { useState } from 'react';
import Title from './components/Title/Title';
import Inputs from './components/Inputs/Inputs';
import Card from './components/Card/Card';

function App(): JSX.Element {
  const [cards, setCards] = useState([
    {
      title: 'The Equalizer',
      more: 'The Equalizer is a 2014 American vigilante action film directed by Antoine Fuqua',
      priority: 7,
    },
  ]);

  function handleSubmit(card: {
    title: string;
    more: string;
    priority: number;
  }) {
    const newCards = [card, ...cards];
    setCards(newCards);
  }

  return (
    <div>
      <header>
        <Title>Movies to watch</Title>
      </header>

      <Inputs onSubmit={handleSubmit}></Inputs>
      {cards.map((card) => (
        <Card title={card.title} more={card.more} priority={card.priority} />
      ))}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Title from './components/Title/Title';
import Inputs from './components/Inputs/Inputs';
import Card from './components/Card/Card';

function App(): JSX.Element {
  const [cards, setCards] = useState([
    {
      title: 'ABC',
      more: 'das',
      priority: 5,
    },
  ]);

  function handleSubmit(card: {
    title: string;
    more: string;
    priority: number;
  }) {
    const newCards = [card, ...cards];
    setCards(newCards);
    return cards;
  }

  return (
    <div>
      <header>
        <Title>Movies to watch</Title>
      </header>

      <Inputs onSubmit={handleSubmit}></Inputs>
      {cards.map((card) => (
        <Card title={card.title} more={card.more} />
      ))}
    </div>
  );
}

export default App;

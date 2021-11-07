import classes from './Inputs.module.css';
import React, { useState } from 'react';
import Submit from '../Submit/Submit';
import Priority from '../Priority/Priority';

type InputProps = {
  onSubmit: (card: {
    title: string;
    more: string;
    isDone: boolean;
    priority: number;
  }) => void;
};

function Inputs({ onSubmit }: InputProps): JSX.Element {
  const [title, setTitle] = useState('');
  const [more, setMore] = useState('');
  const [priority, setPriority] = useState(5);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit({ title, more, isDone: true, priority }); 
    setTitle('')
    setMore('')
    setPriority(5)
  }
  return (
    <form className={classes.form} onSubmit={(event) => handleSubmit(event)}>
      <label className={classes.title_input}>
        Title{' '}
        <input
          type="text"
          placeholder="enter title.."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label className={classes.more_input}>
        More{' '}
        <input
          type="text"
          placeholder="enter more info.."
          value={more}
          onChange={(event) => setMore(event.target.value)}
        />
      </label>
      <Priority priority={priority} setPriority={setPriority}></Priority>
      <Submit>submit</Submit>
    </form>
  );
}

export default Inputs;

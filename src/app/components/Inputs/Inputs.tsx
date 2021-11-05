import classes from './Inputs.module.css';
import React, {useState} from 'react';


type InputProps = {
    onSubmit: (card: {
      title: string;
      more: string;
      isDone: boolean;
    }) => void;
  };
  
  function Inputs({ onSubmit }: InputProps): JSX.Element {
    const [title, setTitle] = useState('');
    const [more, setMore] = useState('');
  
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      onSubmit({ title, more, isDone:true });
    }
  return (
    <form className={classes.form} onSubmit={(event) => handleSubmit(event)}>
      <label>
        Title{' '}
        <input
          className={classes.title_input}
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        More{' '}
        <input
          type="text"
          value={more}
          onChange={(event) => setMore(event.target.value)}
        />
      </label>
    </form>
  );
}

export default Inputs;

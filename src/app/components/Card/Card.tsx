import React from 'react';
import classes from './Card.module.css';

type CardProps = {
  title: string;
  more: string;
  priority: number;
};

function Card({ title, more, priority }: CardProps): JSX.Element {
  return (
    <div>
      <div className={classes.card}>
        <h1 className={classes.card_title}>{title}</h1>
        <span>
          <button>delete</button>
        </span>
        <p>{more}</p>

        <label className={classes.card_prio}>
          <span>
            Prio <input type="number" min={1} max={10} value={priority} />
          </span>
          <span className={classes.watched_style}>
            watched <input type="checkbox" />
          </span>
        </label>
      </div>
    </div>
  );
}

export default Card;

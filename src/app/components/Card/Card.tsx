import React from 'react';
import classes from './Card.module.css';

type CardProps = {
  title: string;
  more: string;
};

function Card({ title, more }: CardProps): JSX.Element {
  return (
    <div>
      <div className={classes.card}>
        <h1 className={classes.card_title}>{title}</h1>
        <p>{more}</p>

        <label className={classes.card_prio}>
          <span>
            Prio <input type="number" min={1} max={10} defaultValue={5} />
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

// <form className={classes.formElement}>
//       <label className={classes.label} htmlFor="title">
//         Title:
//         <input type="text" name="name" id="title" placeholder="titlename" />
//       </label>
//       <label className={classes.label} htmlFor="description">
//         Description:
//         <input
//           type="text"
//           name="name"
//           id="description"
//           placeholder="description"
//         />
//       </label>
//       <button className={classes.button}>Senden</button>
//     </form>

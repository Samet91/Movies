import React from 'react';
import classes from './Counter.module.css';

type CounterProps = {
  count: number;
  decrementClick: () => void;
  incrementClick: () => void;
};

function Counter({
  count,
  decrementClick,
  incrementClick,
}: CounterProps): JSX.Element {
  return (
    <div className={classes.counter}>
      <button className={classes.button} onClick={decrementClick}>
        -
      </button>
      {count}
      <button className={classes.button} onClick={incrementClick}>
        +
      </button>
    </div>
  );
}
export default Counter;

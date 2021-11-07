import React from 'react';
import classes from './Priority.module.css';

type PriorityProps = {
  priority: number
  setPriority: (priority: string) => void;
}; 
function Priority({priority, setPriority}: PriorityProps) : JSX.Element {
  return (
    <label className={classes.priority_styles}>
      Priority{' '}
      <input
        defaultValue={5}
        className={classes.prio}
        type="number"
        value={priority}
        min={1}
        max={10}
        onChange={(event) => setPriority(event.target.value)}
        />
    </label>
  );
}

export default Priority;

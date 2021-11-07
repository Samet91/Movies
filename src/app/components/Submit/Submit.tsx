import type { ReactNode } from 'react';
import React from 'react';
import classes from './Submit.module.css';

type SubmitProps = {
  children: ReactNode;
};
function Submit({ children }: SubmitProps): JSX.Element {
  return <button className={classes.submit}>{children}</button>;
}

export default Submit;

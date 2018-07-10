import React from 'react';
import styles from './Spinner.css';

export default () => (
  <div className={styles.root}>
  <div className={styles['lds-ring']}>
    <div />
    <div />
    <div />
    <div />
  </div>
  </div>
);

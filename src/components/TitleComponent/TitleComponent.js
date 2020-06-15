import React from 'react';
import classes from './title.module.css';
const titles = () => (
    <div>
        <h1 className={classes.titleContainerTitle}>Daily Weather App</h1>
        <p className={classes.titleContainerSubtitle}>Find out temparature conditions and more...</p>
    </div>
);

export default titles;
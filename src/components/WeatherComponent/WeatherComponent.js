import React from 'react';
import classes from './weather.module.css';

const weather = props => (
    <div className={classes.weatherInfo}>
        {props.city && props.country && <p className={classes.weatherKey}>Location:<span className={classes.weatherValue}> {props.city }, {props.country }</span></p>}
        {props.temperature && <p className={classes.weatherKey}>Temperature:<span className={classes.weatherValue}> {props.temperature }</span></p>}
        {props.humidity && <p className={classes.weatherKey}>Humidity:<span className={classes.weatherValue}> {props.humidity }</span></p>}
        {props.description && <p className={classes.weatherKey}>Conditions:<span className={classes.weatherValue}> {props.description }</span></p>}
        {props.error && <p className={classes.weatherError}>{ props.error }</p>}
    </div>
);

export default weather;
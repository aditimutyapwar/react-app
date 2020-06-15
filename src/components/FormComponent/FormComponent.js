
import React, {useState} from 'react';
import classes from './form.module.css';

const Form = props => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    return (
    <form onSubmit={(e) => props.getWeather(e, city, country)}>
        <input 
            type="text" 
            name="city" 
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder="city" />
        <input 
            type="text" 
            name="country" 
            value={country}
            onChange={e => setCountry(e.target.value)}
            placeholder="country" />
        <button>Get Weather</button>
    </form>
    );
};

export default Form;
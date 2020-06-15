
import React, {useState} from 'react';
import classes from './form.module.css';
import AutoComplete from '../AutoCompleteComponent/AutoCompleteComponent';

const Form = props => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [citySuggestions, setCitySuggestions] = useState([]);
    
    const items = ['Los Angeles', 'New York', 'San Fransisco', 'Las Vegas' ];
    const onTextChanged = (e) => {
        const value = e.target.value;
        setCity(value);
        if(value.length === 0){
            setCitySuggestions([]);
        }else {
            const regex = new RegExp(`^${value}`, 'i');
            const suggestions = items.sort().filter(v => regex.test(v));
            setCitySuggestions(suggestions);
        }
    }

    const citySuggestionSelected = (value) => {
        setCity(value);
        setCitySuggestions([]);
    }

    return (
    <form onSubmit={(e) => props.getWeather(e, city, country)}>
        <AutoComplete 
            type="text" 
            name="city" 
            value={city}
            onChange={onTextChanged}
            placeholder="city"
            citySuggestions={citySuggestions} 
            citySuggestionSelected={(item) => citySuggestionSelected(item)}/>
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

import React from 'react';
import classes from './autoComplete.module.css';

const autoComplete = props => {
    var renderSuggestions = null;
    if(props.citySuggestions.length !== 0) {
        renderSuggestions = (
            <ul>
                {props.citySuggestions.map((item) => <li key={item} onClick={() => props.citySuggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }

    return (
        <div className={classes.AutoComplete}>
            <input 
                type={props.type} 
                name={props.name} 
                value={props.value} 
                onChange={props.onChange} 
                placeholder={props.placeholder} />
            {renderSuggestions}
        </div>
    );
};

export default autoComplete;
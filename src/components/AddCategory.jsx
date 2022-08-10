import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = event => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const newCat = inputValue.trim();


        if (newCat.length < 1) return;

        onAddCategory(newCat);
        setInputValue("");
    }


  return (
    <form onSubmit={onSubmit} aria-label="form">
        <input 
        type="text" 
        placeholder="Buscar GIFs"
        value={inputValue}
        onChange={onInputChange}
        />
    </form>
    
    )
}


AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired()
}
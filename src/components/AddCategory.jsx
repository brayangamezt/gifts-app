import React, {useState} from 'react';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const submitValue = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1){
            return
        }
        onNewCategory( inputValue.trim() ); // Estoy mandando el valor del input al componente padre a travez de una funcion
        setInputValue('');
    }

  return (
    <form onSubmit={ (event)=>{ submitValue(event) } }>
        <input
            type='text'
            placeholder='Buscar gift'
            value={inputValue}
            onChange={ onInputChange }
        />
    </form>
  )
}



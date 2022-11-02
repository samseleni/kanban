import React from 'react'
import { useState } from 'react';
import './Form.css'
import '../list/List.css'

const Form = (props) => { 
    const {addNewTask, setFormShowed} = props;
    const [values, setValues] = useState({
        title: ''
    });

    const handleChange = (e) => {
        const fieldName = e.target.name;
        setValues({...values, [fieldName]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.title) {
            addNewTask(values.title);
        }
        else alert('Add task');
        setFormShowed(false);
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input 
                className='form-input list-task' 
                id='taskTitle' 
                name='title' 
                type='text' 
                value={values.title}
                onChange={handleChange}
                placeholder=' '
            />
            <button className='button form-button' type='submit'>Submit</button>
        </form>
        
    )
}

export default Form
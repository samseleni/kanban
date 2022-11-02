import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'

import { LIST_TYPES } from "../../config";

import './List.css'
import Form from "../form/Form";
import Dropdown from "../dropdown/Dropdown";

const List = (props) => {
    const {title, type, tasks, addNewTask, prevTasks, moveTask} = props;
    const [isFormShowed, setFormShowed] = useState(false);    

    const handleCLick = () => {
        setFormShowed(!isFormShowed);
    }

    return (
        <div className="list">
            <h3 className="list-title">{title}</h3>
            <div className='list-container'>
                {tasks.map(task => {
                    return (
                        <Link to={`/tasks/${task.id}`} className='list-link'>
                            <div key={task.id} className="list-task">{task.title}</div>
                        </Link>
                    )
                })}
                {isFormShowed === false && (
                <button 
                    className={`button list-button ${(type !== LIST_TYPES.BACKLOG && prevTasks.length === 0) ? 'button-disabled': ''}`} 
                    onClick={handleCLick} 
                    type='text' 
                    disabled={(type !== LIST_TYPES.BACKLOG && prevTasks.length === 0) ? true : false}>
                    <span className="list-plus">+&thinsp;</span>Add card
                </button>
                )} 
                {isFormShowed && type === LIST_TYPES.BACKLOG && (
                    <Form addNewTask={addNewTask} setFormShowed={setFormShowed}/>
                )}
                {isFormShowed && type !== LIST_TYPES.BACKLOG && (
                    <Dropdown prevTasks={prevTasks} isFormShowed={isFormShowed} setFormShowed={setFormShowed} type={type} moveTask={moveTask} />
                )}  
            </div>    
        </div>
    )
}

export default List
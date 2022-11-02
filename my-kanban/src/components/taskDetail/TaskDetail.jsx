import React from "react";
import { useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import './TaskDetail.css';
import '../form/Form.css'

const TaskDetail = () => {

    const tasks = JSON.parse(window.localStorage.getItem("tasks"));

    const {taskId} = useParams();
    const task = tasks.find(task => task.id === taskId);

    const startDescription = 'This task has no description';
    const [newDescription, setDescription] = useState((task && task.description.length) ? task.description : startDescription);
    const [isEdit, setIsEdit] = useState(true);
    const textarea = useRef();
    
    const handleCLick = () => {
        setIsEdit(!isEdit);
        textarea.current.disabled = !textarea.current.disabled;

        //логика по виду поля и кнопки и вводу описания
        if (newDescription === startDescription) {
            setDescription('');
            textarea.current.focus();
        } else if (newDescription === '') setDescription(startDescription);
        else { 
            textarea.current.focus();
            textarea.current.setSelectionRange(task.description.length, task.description.length);
        }

        //логика по записи описания в localstorage
        if (isEdit === false) {
            const newTasks = tasks.map(newTask => {
                if (newTask.id === taskId && newDescription !== startDescription) {
                    return ({...newTask, description: newDescription})
                    // newTask.description = description === startDescription ? '' : description;
                }
                return newTask;
            })
            window.localStorage.setItem('tasks', JSON.stringify(newTasks))
        }
    }

    return (
        <div className="detail">
            {task ? (
                <>
                    <div className="text-container">
                        <h2 className='detail-title'>{task.title}</h2>
                        <textarea 
                            value={newDescription}
                            ref={textarea} 
                            name="detail-description" 
                            id="detail-description" 
                            className="detail-description" 
                            disabled={true}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <button 
                            className="detail-button form-button" 
                            id="detail-description" 
                            onClick={handleCLick} 
                        >
                            {isEdit ? 'Edit description' : 'Save description'}
                        </button>
                        
                    </div>
                </>
            ) :
                (<h2 className='detail-title'>Task {taskId} not found</h2>)
            }
            <Link to='/' className="detail-close">&#x2715;</Link>
        </div>
    )
}

export default TaskDetail;
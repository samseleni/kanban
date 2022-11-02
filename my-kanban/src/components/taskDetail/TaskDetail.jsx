import React from "react";
import { useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import './TaskDetail.css';
import '../form/Form.css'

const TaskDetail = (props) => {

    const {tasks, setTasks} = props;

    const {taskId} = useParams();
    const task = tasks.find(task => task.id === taskId);

    const startDescription = 'This task has no description';
    
    const [description, setDescription] = useState((task && task.description) ? task.description : startDescription);

    const [isEdit, setIsEdit] = useState(true);
    const textarea = useRef();
    
    const handleCLick = () => {
        setIsEdit(!isEdit);
        textarea.current.disabled = !textarea.current.disabled;

        //логика по виду поля и кнопки и вводу описания
        if (description === startDescription) {
            setDescription('');
            textarea.current.focus();
        } else if (description === '') setDescription(startDescription);
        else { 
            textarea.current.focus();
            textarea.current.setSelectionRange(description.length, description.length);
        }

        //запись описания в задачу
        if (isEdit === false) {
            const newTasks = tasks.map(newTask => {
                if (newTask.id === task.id && description !== startDescription) return ({...newTask, description});
                return newTask;
            })
            setTasks(newTasks)       
        }  
    }

    return (
        <div className="detail">
            {task ? (
                <>
                    <div className="text-container">
                        <h2 className='detail-title'>{task.title}</h2>
                        <textarea 
                            value={description}
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
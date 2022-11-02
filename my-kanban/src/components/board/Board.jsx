import React from "react";
import uniqid from 'uniqid'
import './Board.css'
import { LIST_TYPES, LIST_COPY } from "../../config";
import List from "../list/List";

const Board = (props) => {
    const {tasks, setTasks, description} = props;

    const addNewTask = (title) => {
        const newTask = {
            id: uniqid(),
            title: title,
            description,
            status: LIST_TYPES.BACKLOG
        }
        setTasks([...tasks, newTask]);
    }

    const moveTask = (id, type) => {
        const taskToMove = tasks.map(task => {
            if (task.id === id) return ({...task, status: type});
            return task;
          })     
        setTasks(taskToMove);
    }

    const types = Object.values(LIST_TYPES);
    
    return (
        <div className="board">
            {types.map((type, index) => {
                const ListCurTasks = tasks.filter(task => task.status === type);
                const ListPrevTasks = tasks.filter(task => task.status === types[index - 1]);
                return (
                    <List 
                        key={type} 
                        title={LIST_COPY[type]} 
                        type={type} 
                        tasks={ListCurTasks || []} 
                        prevTasks={ListPrevTasks} 
                        addNewTask={addNewTask} 
                        moveTask={moveTask}
                    />
                )
            })}
        </div>
    )
}

export default Board
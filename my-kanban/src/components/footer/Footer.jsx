import React from "react";
import './Footer.css'
import '../header/Header.css'
import { LIST_TYPES } from "../../config";

const Footer = (props) => {
    const {tasks, name, year} = props; 
    const activeTasks = tasks.filter(task => task.status === LIST_TYPES.BACKLOG);
    const finishedTasks = tasks.filter(task => task.status === LIST_TYPES.FINISHED);

    return (
        <footer className="footer header">
            <div className="count">
                <div className={`count-item ${(activeTasks.length === 0 || !finishedTasks.length === 0) ? 'count-item-single' : ''}`}>
                    {activeTasks.length ? `Active tasks: ${activeTasks.length}` : null}
                </div>
                <div className="count-item">
                    {finishedTasks.length ? `Finished tasks: ${finishedTasks.length}` : null}
                </div>
            </div>
            <div>Kanban board by {name}, {year}</div>
        </footer>
    )
}

export default Footer
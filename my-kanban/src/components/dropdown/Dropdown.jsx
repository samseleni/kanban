import React from "react";
import "./Dropdown.css";
import "../list/List.css";

const Dropdown = (props) => {
    const { prevTasks, type, setFormShowed, isFormShowed, moveTask } = props;

    const handleChange = (e) => {
        let task = null;
        if (e.target.selectedIndex) {
        task = prevTasks[e.target.selectedIndex - 1];
        moveTask(task.id, type);
        setFormShowed(!isFormShowed);
        }
    };

    return (
        <select className="select list-task" onChange={handleChange} onBlur={() => setFormShowed(false)}>
            <option value=""></option>
            {prevTasks.map((task) => {
                return (<option className="select-item list-task" key={task.id} value={task.title}>{task.title}</option>);
            })}
        </select>
    );
};

export default Dropdown;

import React from "react";
import './Footer.css'
import '../header/Header.css'
import { LIST_TYPES, LIST_COPY } from "../../config";

const Footer = (props) => {
    const {tasks} = props; 
    return (
        <footer className="footer header">
            <div className="count">
                {Object.values(LIST_TYPES).map(type => {
                    const listCount = tasks.filter(task => task.status === type);
                    if (!listCount.length) return null;
                    return (
                        <div key={type} className="count-item">
                                {LIST_COPY[type]}: {listCount.length}
                        </div>
                    )
                })}
            </div>
            <div>Kanban board by NAME, YEAR</div>
        </footer>
    )
}

export default Footer
import React from "react";
import "./TaskForm.css";
import TagButton from "./Tagbutton";
const TaskForm = () => {
    return (
        <header className="app_header">
            <form>
                <input className="task_input" type="text" placeholder="Enter Your Task"></input>
                <div className="task_buttons">
                    <div>
                        <TagButton tagName="HTML"></TagButton>
                        <TagButton tagName="CSS"></TagButton>
                        <TagButton tagName="Javascript"></TagButton>
                        <TagButton tagName="React"></TagButton>
                     |</div>
                    <div className="task_select">
                        <select className="task_status">
                            <option value="Todo"> Doing</option>
                            <option value="Going to do" >Going to do</option>
                            <option value="done">Done</option>
                        </select>

                    </div>
                    <button className="task_submit">+Add Task</button>
                </div>
            </form>
        </header>
    )
}
export default TaskForm;
import React from "react";
const TaskForm = () => {
    return (
        <header className="app_header">
            <form>
                <input type="text" placeholder="Enter Your Task"></input>
                <div className="task_buttons">
                    <button className="tag">HTML</button>
                    <button className="tag">CSS</button>
                    <button className="tag">JS</button>
                    <button className="tag">React</button>
                    <select className="Task_Select">
                        <option value="Todo"> Doing</option>
                        <option value="Going to do" >Going to do</option>
                        <option value="done">Done</option>
                        <button className="task_Submit">+Add Task</button>
                    </select>
                </div>
            </form>
        </header>
    )
}
export default TaskForm;
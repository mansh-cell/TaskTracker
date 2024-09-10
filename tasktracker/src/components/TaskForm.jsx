import React from "react";
import "./TaskForm.css";
const TaskForm = () => {
    return (
        <header className="app_header">
            <form>
                <input className="task_input" type="text" placeholder="Enter Your Task"></input>
                <div className="task_buttons">
                    <div>
                        <button className="tag">HTML</button>
                        <button className="tag">CSS</button>
                        <button className="tag">JS</button>
                        <button className="tag">React</button>
                    </div>
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
import React, { useState } from "react";
import "./TaskForm.css";
import TagButton from "./TagButton";

const TaskForm = ({setTasks}) => {
    const [taskData, setTaskData] = useState({
        Task: "",
        Status: "Todo",
        Tags: [],
    });

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setTaskData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData);
        setTasks (prev => 
           {
            return [ ...prev , taskData]
           }
        )
      setTaskData({
        Task: "",
        Status: "Todo",
        Tags: [],
    });
    console.log(taskData);
    };

    const checkTag = (tag) => {
        return taskData.Tags.some(item => item === tag);
    };

    const selectTag = (tag) => {
        console.log("Selecting/Deselecting tag:", tag);
        if (taskData.Tags.some(item => item === tag)) {
            const filteredTags = taskData.Tags.filter(item => item !== tag);
            setTaskData(prev => ({ ...prev, Tags: filteredTags }));
        } else {
            setTaskData(prev => ({ ...prev, Tags: [...prev.Tags, tag] }));
        }
    };

    return (
        <header className="app_header">
            <form onSubmit={handleSubmit}>
                <input
                    className="task_input"
                    value = {taskData.Task}
                    type="text"
                    placeholder="Enter Your Task"
                    name="Task"
                    onChange={handleChangeInput}
                />
                <div className="task_buttons">
                    <TagButton tagName="HTML" selectTag={selectTag} selectedtag={checkTag("HTML")} />
                    <TagButton tagName="CSS" selectTag={selectTag} selectedtag={checkTag("CSS")} />
                    <TagButton tagName="JavaScript" selectTag={selectTag} selectedtag={checkTag("JavaScript")} />
                    <TagButton tagName="React" selectTag={selectTag} selectedtag={checkTag("React")} />
             
                <div className="task_select">
                    <select className="task_status" value={taskData.Status} onChange={handleChangeInput} name="Status">
                        <option value="todo">Todo</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                    <button className="task_submit" type="submit">+Add Task</button>
                </div>
               </div>
            </form>
        </header>
    );
};

export default TaskForm;

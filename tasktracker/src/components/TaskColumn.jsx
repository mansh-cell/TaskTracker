import React from 'react'
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
const TaskColumn = ({title, tasks , status, handleDelete,index}) => {
  console.log(status)
  console.log(tasks)

  return (
    <section className= "task_section">
        <h2 className="task_header">{title}</h2>

        {tasks
        .filter(task =>  task.Status === status) // Ensure `Status` is correct
        .map((task, index) => (
         
          <TaskCard
            key={index}
            title={task.Task} // Ensure property names are correct
            tags={task.Tags}  // Ensure property names are correct
            handleDelete = {handleDelete}
            index ={index}
          />
        ))}
        </section>
  )
}

export default TaskColumn;
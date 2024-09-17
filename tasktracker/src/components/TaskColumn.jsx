import React from 'react'
import "./TaskColumn.css"
import TaskCard from './TaskCard'
const TaskColumn = (props) => {
  return (
    <section className= "task_section">
        <h2 className="task_header">{props.Task_name}</h2>
        <TaskCard></TaskCard>
        </section>
  )
}

export default TaskColumn;
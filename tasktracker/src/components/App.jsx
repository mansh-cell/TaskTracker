import React, { useEffect, useState } from "react";
import "../components/App.css";
import TaskForm from "./TaskForm";
import TaskColumn from "./TaskColumn";


//Saving task in localstorage so the whenever we refersh the page data will get refresh
const oldTasks = localStorage.getItem("data");
console.log(oldTasks);
const app = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks));// This will convert our string into array.
  useEffect(() =>{
    localStorage.setItem("data" , JSON.stringify(tasks));// data is variable and tasks is our array so whenever it will change it's state then function will run
  },[tasks]);
  const handleDelete= (taskindex) =>{
    const newTask = tasks.filter((task , Index) => Index !== taskindex)
    setTasks(newTask);
  }
  console.log("tasks:" ,tasks);
    return(
     <div className = "app">
        <TaskForm setTasks = {setTasks}></TaskForm>
        <main className = "app_main">
          <TaskColumn title ="todo" tasks = {tasks} status = "todo" handleDelete ={handleDelete}></TaskColumn>
          <TaskColumn title ="doing" tasks = {tasks} status = "doing" handleDelete ={handleDelete}></TaskColumn>
          <TaskColumn title="done" tasks = {tasks} status = "done" handleDelete ={handleDelete}></TaskColumn>
        </main>
     </div>
    )
}
export default app;
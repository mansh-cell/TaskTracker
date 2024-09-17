import React from "react";
import "../components/App.css";
import TaskForm from "./TaskForm";
import TaskColumn from "./TaskColumn";
const app = () => {
    return(
     <div className = "app">
        <TaskForm></TaskForm>
        <main className = "app_main">
          <TaskColumn Task_name ="Todo"></TaskColumn>
          <TaskColumn Task_name ="Doing"></TaskColumn>
          <TaskColumn Task_name ="Done"></TaskColumn>
        </main>
     </div>
    )
}
export default app;
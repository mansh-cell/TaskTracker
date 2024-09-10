import React from "react";
import "../components/App.css";
import TaskForm from "./TaskForm";
const app = () => {
    return(
     <div className = "app">
        <TaskForm></TaskForm>
        <main className = "app_main">
            <section className= "task_section">Section1 </section>
            <section className= "task_section">Section2 </section>
            <section className= "task_section">Section3 </section>
        </main>
     </div>
    )
}
export default app;
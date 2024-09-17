import React, { useState } from "react";
import "./TaskForm.css";
import TagButton from "./Tagbutton";
const TaskForm = () => {
    // Properly initialize useState with an object, which is not iterable but correct for this case
    const [taskData, setTaskData] = useState({
      Task: "",
      Status: "Todo",
      Tags : [],
    });
  
    const handleChangeInput = (e) =>{
    //   const name = e.target.value ;
    //   const value = e.target.value ;
    const {name , value} = e.target;
      setTaskData((prev) =>{
        return { ...prev , [name]: value};

      });  
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
           console.log(taskData);
    }

    const selectTag = (Tag) => {
        console.log(Tag);
        if(taskData.Tags.some(item => item === Tag)){
            const filteTags = taskData.Tags.filter(item => item!== Tag)
            setTaskData(prev => {
                return { ...prev , Tags: filteTags}
            })
           
        }
        else{
            setTaskData((prev)=>{
                return { ...prev, Tags : [...Tag]};
            })
        }
    }

   //this is for every input field we were creating the single different function for each
    // const [task, seTask] = useState("");
    // const [status , seStatus]= useState("Todo");
    // const handleChangeTask =(e) =>{
    //     seTask(e.target.value);
        
    // }
    // const handleChangeStatus = (e) => {
    //     seStatus(e.target.value)
    // }
    // console.log(task,status);


      //Here, we are using onsubmit here we can also use onchange?
            //but using on submit when someone input anything in input box and then enter and also when someone click one 
            //submit button in both cases this handlesubmit will work. 
            //if we pass that function in onCLick event, then it will only work on button click.

//in html we have taken same property and function name at line 56 it doesn't give any error it can be different also
    return (
        <header className="app_header">
            <form onSubmit={handleSubmit}>
                <input className="task_input" type="text" placeholder="Enter Your Task" name = "Task" onChange={handleChangeInput}></input>
                <div className="task_buttons">
                    <div>
                        <TagButton tagName="HTML" selectTag ={selectTag}></TagButton>
                        <TagButton tagName="CSS" selectTag ={selectTag}></TagButton>
                        <TagButton tagName="Javascript" selectTag ={selectTag}></TagButton>
                        <TagButton tagName="React" selectTag ={selectTag}></TagButton>
                     |</div>
                    <div className="task_select" >
                        <select className="task_status" onChange={handleChangeInput} name = "Status">
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
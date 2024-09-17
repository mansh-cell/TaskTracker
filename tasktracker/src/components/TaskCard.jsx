import React from 'react';
import TagButton from './Tagbutton';
import deleteIcon from "../assets/delete.jpg";
import './TaskCard.css';
const TaskCard = () => {
  return (
    <article className='task_card'>
        <p className='task_text'>This is a sample Text.</p>
        <div className='task_card_bottom_line'>
            <div className='task_card_tags'>
            <TagButton tagName="HTML"></TagButton>
                        <TagButton tagName="CSS"></TagButton>
                        <TagButton tagName="Javascript"></TagButton>
                        <TagButton tagName="React"></TagButton>
            </div>
        <div className='task_delete'>
            <img className="task_delete_icon"src={deleteIcon} alt="delete"/>
        </div>
        </div>
    </article>
  )
}

export default TaskCard
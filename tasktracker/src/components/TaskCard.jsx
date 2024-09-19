import React from 'react';
import TagButton from './TagButton';
import deleteIcon from "../assets/delete.jpg";
import './TaskCard.css';
const TaskCard = ({title, tags , handleDelete , index}) => {
  return (
    <article className='task_card'>
        <p className='task_text'>{title}</p>
        <div className='task_card_bottom_line'>
            <div className='task_card_tags'>
           {
           tags.map((tag , index)  => <TagButton key={index} tagName={tag}/>)
           }
            </div>
        <div className='task_delete' onClick={() =>handleDelete(index)}>
            <img className="task_delete_icon"src={deleteIcon} alt="delete"/>
        </div>
        </div>
    </article>
  )
}

export default TaskCard
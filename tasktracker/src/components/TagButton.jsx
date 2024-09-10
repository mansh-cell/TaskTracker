import React from "react";
import "./TagButton.css";
const Tag_text=[
    "HTML",
    "CSS",
    "JS",
    "React"
];
const TagButton=(props) =>{
    return(
        <button className="tag">{props.tagName}</button>              
    )
}
export default TagButton;
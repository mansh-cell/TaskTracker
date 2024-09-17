import React from "react";
import "./TagButton.css";
const TagButton=({TagName , selectTag}) =>{
    return(
        <button className="tag" type="button" onClick={() =>selectTag(TagName)}>{TagName}</button>              
    )
}
export default TagButton;
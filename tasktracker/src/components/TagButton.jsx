import React from "react";
import "./TagButton.css";

const TagButton = ({ tagName, selectTag, selectedtag }) => {
    const tagStyle = {
        HTML: { backgroundColor: "#fda821" },
        CSS: { backgroundColor: "#15d4c8" },
        JavaScript: { backgroundColor: "#ffd12c" },
        React: { backgroundColor: "#4cdafc" },
        default: { backgroundColor: "#f9f9f9" }
    };

    return (
        <button
            className="tag"
            type="button"
            style={selectedtag ? tagStyle[tagName] || tagStyle.default : tagStyle.default}
            onClick={() => selectTag(tagName)}
        >
            {tagName}
        </button>
    );
};

export default TagButton;

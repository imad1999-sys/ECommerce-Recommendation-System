import React from "react";
import RatingBar from "./RatingBar";
import "../../../Assets/CSS/style.css"

const optionsSection = (props) => {
    return (
      <div className="options-section">
        <a href="#" className="title">{props.title}</a>
        <RatingBar value={props.value}/>
      </div>
    );
}
export default optionsSection;
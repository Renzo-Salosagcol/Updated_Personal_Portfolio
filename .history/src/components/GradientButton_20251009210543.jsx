import React from "react";
import { props } from "react";

function GradientButton(props) {
  return (
    <button className="gradient-button">
      <div className="gradient-button-inner">
        {props.content}
      </div>
    </button>
  )
}

export default GradientButton;
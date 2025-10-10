import React from "react";

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
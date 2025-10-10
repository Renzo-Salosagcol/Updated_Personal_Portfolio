import React from "react";
import { props } from "react";

function GradientButton(props) {
  return (
    <button className="gradient-button">
        {props.content}
    </button>
  )
}

export default GradientButton;
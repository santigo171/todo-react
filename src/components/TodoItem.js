import React from "react";
import "Library/common/css/GridLayout.css";
import "./TodoItem.css";

function TodoItem(props) {
  let classesNames = ["TodoItem", "GridLayout"];

  if (props.completed) {
    classesNames.push("TodoCompleted");
  } else {
    classesNames.push("TodoUncompleted");
  }

  const [fontSize, setFontSize] = React.useState("3.2rem");
  return (
    <div className={classesNames.join(" ")}>
      <span className="TodoItem__circle"></span>
      <div className="TodoItem__content">
        <p
          className="TodoItem__content__text strike"
          style={{ fontSize: fontSize }}
        >
          {props.text}
        </p>
        <p className="TodoItem__content__date">Tomorrow 8:00AM</p>
      </div>
    </div>
  );
}

export { TodoItem };

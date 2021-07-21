import React from "react";
import "./Task.css";

const Task = ({ task }) => {
  return (
    <div className="task-container">
      <p>{task.title}</p>
    </div>
  );
};

export default Task;

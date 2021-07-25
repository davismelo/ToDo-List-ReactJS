import React from "react";
import "./Task.css";
import { BiTrash, BiInfoCircle } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useHistory();
  const handleTaskDetailsClick = () => {
    // Replace foi utilizado para resolver o problema dele acessar / invés de passar a / no titulo.
    history.push(`/${task.id}`);
  };

  return (
    <div
      className="task-container"
      style={
        task.completed
          ? {
              borderLeft: "6px solid #4eb1b8",
              textDecoration: "line-through",
            }
          : {}
      }
    >
      <p
        className="task-title"
        onClick={() => {
          handleTaskClick(task.id);
        }}
      >
        {task.title}
      </p>
      <div className="button-container">
        <button className="task-details-btn" onClick={handleTaskDetailsClick}>
          <BiInfoCircle title="Detalhes" />
        </button>
        <button
          className="remove-task-btn"
          onClick={() => {
            handleTaskDeletion(task.id);
          }}
        >
          <BiTrash title="Remover" />
        </button>
      </div>
    </div>
  );
};

export default Task;

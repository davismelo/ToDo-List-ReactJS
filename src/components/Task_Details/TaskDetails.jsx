import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "../Button/Button";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();
  let allTasks = JSON.parse(localStorage.getItem("tasks"));

  // Voltar para o menu inicial
  const handleBackBtnClick = () => {
    history.replace("/");
  };

  // Capturando o titulo e a descrição da task
  let taskTitle;
  let taskDescription;
  allTasks.forEach((element) => {
    if (element.id === params.taskId) {
      return (
        // eslint-disable-next-line no-sequences
        (taskTitle = element.title), (taskDescription = element.description)
      );
    }
  });

  return (
    <>
      <div className="back-btn-container">
        <Button onClick={handleBackBtnClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{taskTitle}</h2>
        <p>{taskDescription !== "" ? taskDescription : "Descrição vazia..."}</p>
      </div>
    </>
  );
};

export default TaskDetails;

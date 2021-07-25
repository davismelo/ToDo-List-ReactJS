import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "../Btn_Add/Button";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  let description = JSON.parse(localStorage.getItem("tasks"));

  const handleBackBtnClick = () => {
    history.replace("/");
  };

  let taskTitle;
  let taskDescription;
  description.forEach((element) => {
    if (element.id === params.taskTitle) {
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

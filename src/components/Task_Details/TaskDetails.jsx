import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "../Btn_Add/Button";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackBtnClick = () => {
    history.replace("/");
  };

  return (
    <>
      <div className="back-btn-container">
        <Button onClick={handleBackBtnClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          provident debitis quidem id tempore similique maxime molestiae tempora
          cum, fugit saepe eius hic, suscipit non exercitationem nisi quis autem
          nobis?
        </p>
      </div>
    </>
  );
};

export default TaskDetails;

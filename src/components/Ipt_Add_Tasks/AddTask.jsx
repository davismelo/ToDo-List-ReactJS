import React, { useState } from "react";

import Button from "../Btn_Add/Button";
import "./AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };

  return (
    <div className="add-task-container ">
      <input
        type="text"
        className="input-class"
        onChange={handleInputChange}
        value={inputData}
        placeholder="Digite aqui sua tarefa..."
      />
      <Button onClick={handleAddTaskClick}>Add +</Button>
    </div>
  );
};

export default AddTask;

import React, { useState } from "react";

import { GrClose } from "react-icons/gr";

import Button from "../Btn_Add/Button";
import "./AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setInputDescription(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData, inputDescription);
  };

  const showAndHiddenAdd = () => {
    document.querySelector(".wrapper").classList.toggle("display-none");
    document.querySelector(".wrapper input").value = "";
    document.querySelector(".wrapper textarea").value = "";
    setInputData("");
    setInputDescription("");
  };

  return (
    <>
      <div className="add-task-container ">
        <Button onClick={showAndHiddenAdd}>Adicionar uma nova Task</Button>
      </div>
      <div
        className="wrapper display-none"
        onClick={(e) => {
          if (e.target.className === "wrapper") {
            showAndHiddenAdd();
          }
        }}
      >
        <div className="input-add-container">
          <GrClose onClick={showAndHiddenAdd} />
          <input
            type="text"
            name=""
            id=""
            placeholder="Título da Task aqui..."
            onChange={handleInputChange}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Descrição da Task aqui..."
            maxLength="150"
            onChange={handleDescriptionChange}
          ></textarea>
          <Button
            onClick={() => {
              if (inputData !== "") {
                handleAddTaskClick();
                showAndHiddenAdd();
              }
            }}
          >
            Adicionar
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddTask;

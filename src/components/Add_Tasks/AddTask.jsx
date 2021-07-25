import React, { useState } from "react";

import { GrClose } from "react-icons/gr";

import Button from "../Button/Button";
import "./AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
  // Valor do titulo
  const [inputData, setInputData] = useState("");
  // Valor da descrição
  const [inputDescription, setInputDescription] = useState("");
  // Se o modal está aparecendo ou não
  const [isShowing, setShow] = useState(false);

  // Capturar mudança no input do nome da task
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  // Capturar mudança no textarea
  const handleDescriptionChange = (e) => {
    setInputDescription(e.target.value);
  };

  // Adicionar task
  const handleAddTaskClick = () => {
    handleTaskAddition(inputData, inputDescription);
    // Limpar Inputs
    setInputData("");
    setInputDescription("");
  };

  return (
    <>
      <div className="add-task-container ">
        <Button
          onClick={() => {
            setShow(true);
          }}
        >
          Adicionar uma nova Task
        </Button>
      </div>
      <div
        className="modal"
        style={
          isShowing
            ? {
                display: "flex",
              }
            : {
                display: "none",
              }
        }
        onClick={(e) => (e.target.className === "modal" ? setShow(false) : {})}
      >
        <div className="input-add-container">
          <GrClose
            onClick={() => {
              setShow(false);
            }}
          />
          <input
            type="text"
            value={inputData}
            placeholder="Título da Task aqui..."
            onChange={handleInputChange}
          />
          <textarea
            value={inputDescription}
            cols="30"
            rows="10"
            placeholder="Descrição da Task aqui..."
            maxLength="250"
            onChange={handleDescriptionChange}
          ></textarea>
          <Button
            onClick={() => {
              if (inputData !== "") {
                handleAddTaskClick();
                setShow(false);
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

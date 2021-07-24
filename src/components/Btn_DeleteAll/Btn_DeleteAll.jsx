import React from "react";
import Button from "../Btn_Add/Button";
import "./Btn_DeleteAll.css";

const BtnDeleteAll = ({ handleDeleteAllTasks }) => {
  return (
    <div className="btn-delete-container">
      <Button onClick={handleDeleteAllTasks}>Apagar tudo</Button>
    </div>
  );
};

export default BtnDeleteAll;

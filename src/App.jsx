import React, { useState } from "react";
import Tasks from "./components/All_Tasks/Tasks";
import "./App.css";
import AddTask from "./components/Ipt_Add_Tasks/AddTask";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };
  return (
    <div className="container">
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import TaskDetails from "./components/Task_Details/TaskDetails";
import Tasks from "./components/All_Tasks/AllTasks";
import AddTask from "./components/Add_Tasks/AddTask";
import Header from "./components/Header/Header";
import BtnDeleteAll from "./components/Btn_DeleteAll/Btn_DeleteAll";

const App = () => {
  // Pegar as tasks do localStorage
  let allTasks = JSON.parse(localStorage.getItem("tasks"));

  const verificationTasks = () => {
    if (allTasks === null) {
      return [];
    } else {
      return allTasks;
    }
  };

  const [tasks, setTasks] = useState(verificationTasks());

  // Atualizar o localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Adicionar uma nova task
  const handleTaskAddition = (taskTitle, taskDescription) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
        description: taskDescription,
      },
    ];
    setTasks(newTasks);
  };

  // Adicionar/retirar status de task concluida
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId)
        return {
          ...task,
          completed: !task.completed,
        };
      return task;
    });
    setTasks(newTasks);
  };

  // Deletar task
  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  // Deletar todas task
  const handleDeleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <BtnDeleteAll handleDeleteAllTasks={handleDeleteAllTasks} />
              <div className="tasks-container">
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </div>
            </>
          )}
        />
        <Route path="/:taskId" exact component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import TaskDetails from "./components/Task_Details/TaskDetails";
import Tasks from "./components/All_Tasks/Tasks";
import AddTask from "./components/Ipt_Add_Tasks/AddTask";
import Header from "./components/Header/Header";
import BtnDeleteAll from "./components/Btn_DeleteAll/Btn_DeleteAll";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Adicionar uma nova task
  const handleTaskAddition = (taskTitle) => {
    if (taskTitle !== "") {
      const newTasks = [
        ...tasks,
        {
          title: taskTitle,
          id: uuidv4(),
          completed: false,
        },
      ];
      setTasks(newTasks);
    }
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
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;

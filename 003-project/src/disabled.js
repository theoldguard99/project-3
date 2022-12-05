import React, { useState } from 'react';
import { Route, Routes } from "react-router";
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskPage from './components/TaskPage';

const App = () => {

  const initialTasks = [
    {
      id: uuidv4(),
      title: "Fix Bed",
      status: false,
      description: "You just had segs fix it"
    }
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const completeTaskHandler = (id) => {
    let newState = [...tasks];
    console.log("hey this is the start state", tasks);
    //look for the index of the given ID
    const index = newState.findIndex((task) => task.id === id);
    console.log("hey this is the index", index);

    //change the done from false to true
    newState[index].done = true;
    console.log("hey this is the end state", newState);

    //set the State to the new value
    setTasks(newState);
  };

  const [isShown, setIsShown] = useState(false);

  const handleClick = e => {
    setIsShown(current => !current)
  };
  
  return (
    <div>
      <div class="sidebar">
        {/* {newTask ? (
          <NewTask submit={addTask} hideNewTaskForm={hideNewTaskForm} />
        ) : (
          <Link onClick={showAddItemForm}>Add Item</Link>
        )} */}
        <Link to="">Home</Link>
        <Link to="Add Tasks" onClick={handleClick}>Add Tasks</Link>
        <Link to="Done Tasks">Done Tasks</Link>
        <Link to="Pending Tasks">Pending Tasks</Link>
      </div>

      <Routes>

      <Route path="/" element={<TaskList tasks={tasks} />} />

        <Route
          path=":status"
          element={
            <TaskPage tasks={tasks} completeTask={completeTaskHandler} />
          }
        />
      </Routes>
      <div className='contents-container'>
        <div>
          {isShown && <AddTask />}
        </div>
      </div>
    </div>
    
  )
}

export default App
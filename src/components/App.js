import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)

  const handleDeleteTask = (deletedTask) => { // usually we will use an id instead of text (the most UNIQUE)
    const filteredTasks = tasks.filter(task => deletedTask.text !== task.text) // How does filter work? it's going to iterate over the array, pull out each element in that array one at a time and it's going to check to see if this evaluates to true or false. If true, it creates a new array (of filtered tasks)
    setTasks(filteredTasks)
    // console.log("heyyy")
  }

  const handleAddNewTask = (newTask) => {
    setTasks([...tasks, newTask])
    //console.log(newTask)
  }
  // console.log(TASKS)
  // BELOW: will render list of tasks 
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm categories={categories} handleAddNewTask={handleAddNewTask}/>
      <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask}/> 
    </div>
  );
}

export default App;

// order of events:
// App > Task List > Task
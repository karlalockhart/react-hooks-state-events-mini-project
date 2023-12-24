import React from "react";

function Task({task, handleDeleteTask}) { //{task}
  
  const handleDelete = () => {
    handleDeleteTask(task)
  }
  
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      {/*<button onClick={handleDelete} className="delete">X</button>*/}
      <button onClick={(e) => handleDeleteTask(task)} className="delete">X</button>
    </div>
  );
}

export default Task;

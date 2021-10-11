import React from 'react';
import './style.css';
import newTasks from '../images/user-list.svg';
import Add from '../images/plus.svg';
import {Task} from '../../Helpers';

const Tasks = ({task,tasks,handleTask,handleTasks,handleDelete,handleEdit,handleComplete}) => {
  return (
    <div className="toDo">
    <div className="queue__title">
      <img src={newTasks} alt="tasks"/>
      <h1>New Tasks</h1>
      </div>
      <form className="todo__form">
        <input  placeholder="Enter the task" onChange={handleTask} value={task}/>
        <button title="Add Task" className="todo__btn" onClick={handleTasks}><img src={Add} alt="add task"/></button>
      </form>
      <div>
        {tasks.map(({id,name})=> {
            return (
              <div key={id}>
                <Task name={name} handleDelete= {handleDelete} id={id} handleEdit={handleEdit} handleComplete={handleComplete}/>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default Tasks;

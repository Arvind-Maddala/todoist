import React, {useState} from 'react';
import './style.css';
import { v4 as uuid } from 'uuid';
import {Trash , CompletedTasks, Tasks} from '../../components';

const TaskQueues = () => {
  //State Variables 
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [trashTasks, setTrashTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  
  // To handle Input Value Change

  const handleTask = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  }

  // To Add Tasks 

  const handleTasks = (e) => {
    e.preventDefault();
    //if empty task is entered 
    if(!task) return
    // If user wants to updated any task
    if(task && editTask) {
        let updatedTasks = tasks.map((element)=> {
          if(element.id === editTask) {
            return {...element, name:task}
          }
          return element
        })
        setTasks(updatedTasks);
        setEditTask(null);
        setTask('')
    }
    //Assigning Id to tasks
     else {
      setTasks([...tasks, {id:uuid(), name:task}]);
      setTask('')
     }
  }

  //Deleting Tasks

  const handleDelete = (index) => {
    const newTasks = tasks.filter(({id})=> {
      return id!== index;  
    })
    setTasks(newTasks);
    const currentTask = tasks.find(({id})=> {return id === index})
    setTrashTasks([...trashTasks, currentTask]);
  }

  const handleCompletedTaskDelete = (index) => {
    const newTasks = completedTasks.filter(({id})=> {
      return id!== index;  
    })
    setCompletedTasks(newTasks);
    const currentTask = completedTasks.find(({id})=> {return id === index})
    setTrashTasks([...trashTasks, currentTask]);
  }
  //Editing Tasks 
  const handleEdit = (index) => {
    let editItem = tasks.find(({id})=> {
      return id === index;
    })
    setEditTask(editItem.id);
    setTask(editItem.name)
   
  }

  //to Empty Trash
 const eraseTrash = () => {
  setTrashTasks([])
 }
 //Complete Tasks Queue

 const handleComplete = (index) => {
   let newTasks = tasks.filter(({id})=>{
     return id !== index;
   })
   setTasks(newTasks);
   let completedTask = tasks.find(({id})=> {
    return id === index;
  })
  setCompletedTasks([...completedTasks, completedTask])
 }

 //Restore Task 

 const handleRestore  = (index) => {
  let restoreItem = completedTasks.find(({id})=>{
    return id===index;
  })
  let newCompletedTasks = completedTasks.filter(({id})=>{
    return id !== index;
  })
  setCompletedTasks(newCompletedTasks);
  setTasks([...tasks, restoreItem])
}
  return (
    <div className="taskQueues">
      <div className="ToDoQueue">
      <Tasks task={task} handleTask={handleTask} tasks={tasks} handleComplete={handleComplete} handleEdit={handleEdit} handleDelete={handleDelete} handleTasks={handleTasks}/>
      </div>
      <div className="CompletedQueue">
      <CompletedTasks completedTasks={completedTasks} handleRestore={handleRestore} handleCompletedTaskDelete={handleCompletedTaskDelete}/>
      </div>
      <div className="TrashQueue">
      <Trash trashTasks={trashTasks} eraseTrash={eraseTrash}/>
      </div>
    </div>
  )
}

export default TaskQueues

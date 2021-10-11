import React from 'react';
import Modify from '../../components/images/note-pencil.svg';
import Complete from '../../components/images/check-circle.svg';
import Delete from '../../components/images/trash.svg';
import './style.css';

const Task = ({name, handleDelete,handleEdit, id, handleComplete}) => {

  return (
    <div className="task">
      <h2>{name}</h2>
      <div>
      <button  title="completed Task" className="task__btn" onClick={() =>handleComplete(id)}><img src={Complete} alt = "complete task"/></button>
      <button title="Update Task" onClick={()=>handleEdit(id)} className="task__btn" ><img src={Modify} alt = "Modify task"/></button>
      <button title="Remove Task" className="task__btn" onClick={()=>handleDelete(id)}><img src={Delete} alt = "Delete task" /></button>
      </div>
    </div>
  )
}

export default Task

import React from 'react';
import './style.css';
import TrashIcon from '../images/trash-simple.svg'

const Trash = ({trashTasks, eraseTrash}) => {
  return (
   <>
    <div className="trash">
    <div className="queue__title">
      <img src={TrashIcon} alt="tasks"/>
      <h1>Trash</h1>
      </div>
    {trashTasks.length > 0 ? trashTasks.map((data,id) =>{return <div key={id}><p className="trash__task">{data.name}</p></div>}) : <p className="errorMessage">Trash is empty</p>}
    </div>
    <button className="trash__btn" onClick={eraseTrash}>Empty Trash </button>
   </>
  )
}

export default Trash

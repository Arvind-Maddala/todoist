import React from 'react';
import './style.css';
import Completed from '../images/checks.svg';
import Deleted from '../images/trash.svg';
import restore from '../images/clock-clockwise.svg';

const CompletedTasks = ({completedTasks, handleRestore, handleCompletedTaskDelete}) => {
  return (
   <>
   <div className="queue__title">
   <img src={Completed} alt="Completed" />
   <h1> Completed Tasks</h1>
   </div>
    <div>
      {completedTasks.length > 0 ? 
      completedTasks.map(({id,name}) => {
        return <div key={id} className="completedTask">
          <h2>{name}</h2>
            <div className="completedTask__Btns"> 
              <button title="Restore task" onClick={() =>handleRestore(id)}><img src={restore} alt="Completed" /></button> 
              <button title="Delete task" onClick={()=>handleCompletedTaskDelete(id)}><img src={Deleted} alt="Completed" /></button>
            </div> 
          </div>}) 
      : <p className="errorMessage">No Tasks completed yet</p>}
    </div>
    
    
   </>
  )
}

export default CompletedTasks

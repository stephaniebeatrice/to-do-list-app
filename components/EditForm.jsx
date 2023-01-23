import {useState} from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask(...editedTask, updatedTaskName);
    
  }
  return (
    <div 
    role = "dialogue" 
    aria-labelledby = "editTask"
    onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
    >
    <form 
    className = "todo"
    onSubmit={handleFormSubmit}>
      
        <div className = "wrapper">
            <input type ="text" 
              id ="editTask" 
              className = "input" 
              value = {updatedTaskName}
              onInput={(e) => setUpdatedTaskName(e.target.value)} 
              autoFocus
              required
              maxLength = {60}
              placeholder = "Update Task"/>
              <label htmlFor='editTask'
              className = "label">Update Text</label>
        </div>
        <button className='btn'
        aria-label = {'Confirm edited task to now read ${updatedTaskName}'}
        type = "submit">
          <CheckIcon strokewidth={2} height={24} width={24}/>
        </button>
    </form>
    </div>
  )
}

export default EditForm

import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'

const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
}

const CustomForm = () => {
  return (
    <form className = "todo"
    onSubmit={handleFormSubmit}>
        <div className = "wrapper">
            <input type ="text" 
              id ="task" 
              className = "input" 
              //value = {task}
              //onInput={(e) => setTask(e.target.value)} 
              autoFocus
              required
              maxLength = {60}
              placeholder = "Enter Text"/>
              <label htmlFor='task'
              className = "label">Enter Text</label>
        </div>
        <button className='btn'
        aria-label = "Add Task"
        type = "submit">
          <PlusIcon />
        </button>
    </form>
  )
}

export default CustomForm

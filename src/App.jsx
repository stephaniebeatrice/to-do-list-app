import { useState } from 'react'
import CustomForm from '../components/CustomForm'


function App() {
  const [count, setCount] = useState(0)

  const addTask = (task) => {
    console.log(task);
  }

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addtask}/>
    </div>
  )
}

export default App

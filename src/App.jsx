import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { useState, useEffect } from 'react'

function App() {

  const [tasks, setTasks] = useState([])

  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;

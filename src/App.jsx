import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { useState, useEffect } from 'react'

function App() {

  const [tasks, setTasks] = useState([])

  return (
    <main className='bg-gray-900 h-screen'>
      <div className='container mx-auto p-10'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;

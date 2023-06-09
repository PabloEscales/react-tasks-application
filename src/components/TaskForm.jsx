import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description
    });
    setTitle('')
    setDescription('')
  }


  return (
    <div className='max-w-md mx-auto'>
      <form className='bg-slate-800 p-10 mb-4 rounded-md' onSubmit={handleSubmit}>
        <h1
          className='text-2xl font-bold text-white mb-3'
        >
          Create your task
        </h1>
        <input
          placeholder="Type your title..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className='bg-slate-300 p-3 w-full mb-2 rounded-md'
          autoFocus
        />
        <textarea
          placeholder="Type description..."
          onChange={(e) => setDescription(e.target.value)}
          className='bg-slate-300 p-3 w-full mb-2 rounded-md'
          value={description}
        >
        </textarea>
        <button
          className='bg-indigo-500 px-3 py-1 text-white rounded-md'
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm

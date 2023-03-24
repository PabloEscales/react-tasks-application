import TaskCard from "./TaskCard"
import { TaskContext } from "../context/TaskContext"
import { useContext } from 'react'

function TaskList() {

  const { tasks } = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1>No task yet</h1>
  }

  return (
    <div>
      {
        tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
    </div>
  );
}

export default TaskList;

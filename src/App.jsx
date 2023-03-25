import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {

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

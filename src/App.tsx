import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import { useTasks } from './context/TaskContext';

export default function App() {
  const { tasks, isLoading, error, completeTask, deleteTask } = useTasks();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 md:p-6">
      <div className="w-full max-w-xl h-screen md:h-[calc(100vh-3rem)] bg-white p-6 rounded-lg shadow-md overflow-y-auto flex-grow">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">📜 Task Manager</h1>
        <AddTaskForm />
        {isLoading ? (
          <p className="text-gray-500 text-center">Loading tasks...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : tasks.length === 0 ? (
          <p className="text-gray-500 text-center">
            No tasks yet. Add one above!
          </p>
        ) : (
          <TaskList
            tasks={tasks}
            onComplete={completeTask}
            onDelete={deleteTask}
          />
        )}
      </div>
    </div>
  );
}

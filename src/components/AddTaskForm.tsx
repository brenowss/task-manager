import { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { Button } from './Button';

export default function AddTaskForm() {
  const { addTask } = useTasks();
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    addTask(newTask);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <div className="flex items-center w-full border rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500 py-1 px-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-grow px-3 py-2 focus:outline-none bg-transparent"
          placeholder="Add a new task..."
        />
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
}

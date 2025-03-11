import { createContext, useContext, useEffect, useState } from 'react';
import { fetchTasks } from '../api/tasks';
import { Task } from '../types/tasks';

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
  error: string | null;
  isLoading: boolean;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Load tasks from localStorage & API
  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    fetchTasks()
      .then((apiTasks) => {
        const mergedTasks = mergeTasks(localTasks, apiTasks);
        setTasks(mergedTasks);
        localStorage.setItem('tasks', JSON.stringify(mergedTasks));
      })
      .catch(() => setError('Failed to load tasks. Please try again.'))
      .finally(() => setLoading(false));
  }, []);

  // Merge local storage and API tasks (avoid duplicates)
  const mergeTasks = (localTasks: Task[], apiTasks: Task[]): Task[] => {
    const localIds = new Set(localTasks.map((t) => t.id));
    const newApiTasks = apiTasks.filter((task) => !localIds.has(task.id));
    return [...localTasks, ...newApiTasks];
  };

  // Add task
  const addTask = (task: Task) => {
    const updatedTasks = [task, ...tasks];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Complete task
  const completeTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Delete task
  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        error,
        isLoading: loading,
        addTask,
        completeTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}

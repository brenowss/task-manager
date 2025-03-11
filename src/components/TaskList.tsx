import { AnimatePresence, motion } from 'framer-motion';
import {
  TaskActions,
  TaskCheckbox,
  TaskContent,
  TaskDelete,
  TaskRoot,
  TaskTitle,
} from './Task';

type TaskListProps = {
  tasks: { id: number; title: string; completed: boolean }[];
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TaskList({
  tasks,
  onComplete,
  onDelete,
}: TaskListProps) {
  return (
    <div className="space-y-3 w-full">
      <AnimatePresence>
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <TaskRoot key={task.id}>
              <TaskContent>
                <div className="flex items-center gap-2">
                  <TaskCheckbox task={task} onComplete={onComplete} />
                  <TaskTitle
                    className={
                      task.completed ? 'line-through text-gray-400' : ''
                    }
                    task={task}
                  >
                    {task.title}
                  </TaskTitle>
                </div>
              </TaskContent>
              <TaskActions>
                <TaskDelete task={task} onDelete={onDelete} />
              </TaskActions>
            </TaskRoot>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { Task } from '../../types/tasks';

type TaskTitleProps = React.ComponentPropsWithoutRef<'h3'> & {
  task: Task;
};

export function TaskTitle({ children, task, className }: TaskTitleProps) {
  return (
    <motion.h3
      className={twMerge('text-lg font-semibold', className)}
      animate={{
        textDecoration: task.completed ? 'line-through' : 'none',
        color: task.completed ? '#9ca3af' : '#000',
        opacity: task.completed ? 0.6 : 1,
        transition: { duration: 0.3 },
      }}
    >
      {children}
    </motion.h3>
  );
}

import './styles.css';

type TaskCheckboxProps = {
  task: { id: number; completed: boolean };
  onComplete: (id: number) => void;
};

export function TaskCheckbox({ task, onComplete }: TaskCheckboxProps) {
  return (
    <div className="task-checkbox flex items-center justify-center">
      <input
        id={`task-${task.id}`}
        type="checkbox"
        className="animated-checkbox"
        checked={task.completed}
        onChange={() => onComplete(task.id)}
      />
      <label htmlFor={`task-${task.id}`}>
        <span></span>
      </label>
    </div>
  );
}

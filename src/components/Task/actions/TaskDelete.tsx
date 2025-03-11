import { TrashIcon } from '../../../assets/icons/Trash';
import { Button } from '../../Button';

type TaskDeleteProps = {
  task: { id: number; completed: boolean };
  onDelete: (id: number) => void;
};

export function TaskDelete({ task, onDelete }: TaskDeleteProps) {
  return (
    <Button onClick={() => onDelete(task.id)}>
      <TrashIcon className="size-3" />
      <span className="hidden md:block">Delete</span>
    </Button>
  );
}

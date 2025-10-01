import type { Task as TaskType } from "../hooks/useTask";

interface Props {
  task: TaskType;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  containerClass?: string;
  titleClass?: string;
  buttonClass?: string;
}

export const Task = ({ task, onToggle, onRemove, containerClass = "", titleClass = "", buttonClass = "" }: Props) => {
  return (
    <li className={`flex justify-between items-center py-2 ${containerClass}`}>
      <button
        onClick={() => onToggle(task.id)}
        className={`text-left flex-1 ${titleClass} ${task.isCompleted ? "line-through text-gray-400" : ""}`}
      >
        {task.title}
      </button>

      <button
        onClick={() => onRemove(task.id)}
        className={`${buttonClass} px-3 py-1 rounded bg-red-500 text-white`}
      >
        Eliminar
      </button>
    </li>
  );
};

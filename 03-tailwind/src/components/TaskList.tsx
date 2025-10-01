import { useState } from "react";
import { useTask } from "../hooks/useTask";
import type { Task as TaskType } from "../hooks/useTask";
import { Task } from "./Task";



export const TaskList = () => {
  const initial: TaskType[] = [
    { id: 1, title: "Hacer la tarea de React", isCompleted: false },
    { id: 2, title: "Revisar la guía 4", isCompleted: true },
  ];

  const { tasks, addTask, removeTask, toggleTask, resetList } = useTask(initial);
  const [title, setTitle] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title.trim());
    setTitle("");
  };

  return (
    <div className="max-w-lg mx-auto p-4 border rounded shadow-sm">
      <h3 className="text-xl font-semibold mb-3">Lista de Tareas</h3>

      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nueva tarea..."
          className="flex-1 px-3 py-2 border rounded"
        />
        <button className="bg-green-500 px-4 py-2 rounded text-white">Agregar</button>
      </form>

      <ul className="space-y-2">
        {tasks.map((t) => (
          <Task
            key={t.id}
            task={t}
            onToggle={toggleTask}
            onRemove={removeTask}
            containerClass="bg-white"
            titleClass="px-2"
            buttonClass="hover:opacity-90"
          />
        ))}
      </ul>

      <div className="mt-4 flex gap-2">
        <button onClick={() => resetList([])} className="bg-yellow-500 px-3 py-1 rounded text-white">
          Resetear lista
        </button>
        <button onClick={() => resetList(initial)} className="bg-blue-600 px-3 py-1 rounded text-white">
          Volver a inicial
        </button>
      </div>
    </div>
  );
};

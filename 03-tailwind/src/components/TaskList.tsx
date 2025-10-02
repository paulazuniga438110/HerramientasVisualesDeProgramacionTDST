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
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h3 className="text-2xl font-bold text-purple-600 mb-4">Lista de Tareas</h3>

      {/* Formulario */}
      <form onSubmit={handleAdd} className="flex gap-2 mb-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Nueva tarea..."
          className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          className="bg-green-500 px-4 py-2 rounded-md text-white font-medium hover:bg-green-600 transition"
        >
          Agregar
        </button>
      </form>

      {/* Lista de tareas */}
      <ul className="space-y-3">
        {tasks.map((t) => (
          <Task
            key={t.id}
            task={t}
            onToggle={toggleTask}
            onRemove={removeTask}
            containerClass="p-3 bg-purple-50 rounded-lg border border-purple-200 flex justify-between items-center"
            titleClass="cursor-pointer select-none"
            buttonClass="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          />
        ))}
      </ul>

      {/* Botones de reset */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => resetList([])}
          className="bg-yellow-500 px-4 py-2 rounded-md text-white font-medium hover:bg-yellow-600 transition"
        >
          Resetear lista
        </button>
        <button
          onClick={() => resetList(initial)}
          className="bg-blue-600 px-4 py-2 rounded-md text-white font-medium hover:bg-blue-700 transition"
        >
          Volver a inicial
        </button>
      </div>
    </div>
  );
};

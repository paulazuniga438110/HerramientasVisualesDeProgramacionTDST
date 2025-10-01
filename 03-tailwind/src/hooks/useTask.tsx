import { useState } from "react";

export interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

export const useTask = (initial: Task[] = []) => {
  const [tasks, setTasks] = useState<Task[]>(initial);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      isCompleted: false,
    };
    setTasks((t) => [newTask, ...t]);
  };

  const removeTask = (id: number) => {
    setTasks((t) => t.filter((task) => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks((t) =>
      t.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const resetList = (list: Task[] = []) => setTasks(list);

  return { tasks, addTask, removeTask, toggleTask, resetList };
};

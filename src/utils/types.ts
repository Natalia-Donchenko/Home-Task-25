import { ChangeEvent } from "react";

export interface ITask {
  id: number;
  title: string;
  status: boolean;
};

export interface IEditTaskListProps  {
  editingTask: {title: string}
  changeTask: (e: ChangeEvent<HTMLInputElement>) => void;
  editTask: () => void;
  cancelEditing: () => void;
};
  
export interface IToDoListProps {
  toDoList: ITask[];
  markDone: (id: number) => void;
  setEditingTask: (task: ITask) => void;
  deleteTask: (id: number) => void;
};

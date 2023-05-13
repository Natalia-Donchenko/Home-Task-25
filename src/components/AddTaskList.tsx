import React from "react"
import { ChangeEvent } from "react"

type AddTaskListProps = {
  task: string 
  setTask: (task: string) => void
  addTask: () => void
}

const AddTaskList: React.FC<AddTaskListProps> = ({ task, setTask, addTask }) => {
  return (
    <div className="addTask">
      <input
        className="task-input"
        placeholder="What do you want to do?"
        value={task}
        onChange={(e: ChangeEvent<HTMLInputElement>): void => setTask(e.target.value)}
      />

      <button
        className="addTask-btn"
        onClick={addTask}
      >Add Task</button>
    </div>
  )
} 

export default AddTaskList
import { ChangeEvent } from "react"
import { IEditTaskListProps } from "../utils/types"

const EditTaskList: React.FC<IEditTaskListProps> = ({ editingTask, changeTask, editTask, cancelEditing }) => {
  return (
    <div className="editing">
      <div>
        <input
          className="task-input"
          value={editingTask && editingTask.title}
          onChange={ (e: ChangeEvent<HTMLInputElement>) => changeTask(e)}
        />
      </div>

      <div className="list-buttons">
        <button 
        className="optional-btn"
          onClick={editTask}
        >update</button>

        <button
        className="optional-btn"
          onClick={cancelEditing}
        >cansel</button>
      </div>
    </div>
  )
} 

export default EditTaskList
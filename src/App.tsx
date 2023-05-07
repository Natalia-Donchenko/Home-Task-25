import { ChangeEvent, useState } from "react";
import AddTaskList from "./components/AddTaskList";
import EditTaskList from "./components/EditTaskList";
import ToDoList from "./components/ToDoList";
import { ITask } from "./utils/types";

function App(): JSX.Element {

  const [toDoList, setToDoList] = useState<ITask[]>([]);
  const [task, setTask] = useState<string>("");
  const [editingTask, setEditingTask] = useState<ITask | null>(null);

  const addTask = () => {
    if (task) {
      let id = Math.random() * 100000000
      let newTask = ({ id: +id, title: task, status: false});

      setToDoList([...toDoList, newTask]);
      setTask(""); 
    };
  };

  const editTask = (): void => {
    if (editingTask) {
      const filterRecords: ITask[] = [...toDoList].filter(task => task.id !== editingTask.id);
      const updateObject: ITask[] = [...filterRecords, editingTask];
      setToDoList(updateObject);
      setEditingTask(null);
    };
  };

  const changeTask = (e: ChangeEvent<HTMLInputElement>): void => {
    if (editingTask) {
      const newEntry: ITask = {
        id: editingTask.id,
        title: e.target.value,
        status: editingTask.status
      };
      setEditingTask(newEntry);
    };
  };

  const cancelEditing = () => {
    setEditingTask(null);
  };

  const deleteTask = (id: number): void => {
    const tasks: ITask[] = toDoList.filter(task => task.id !== id);

    
    setToDoList(tasks);
    setEditingTask(null);
  };

  const markDone = (id: number): void => {
    let doneTasks: ITask[] = [];
    let task: ITask[] = toDoList.map( task => {

      if (task.id === id) {
        return({...task, status: !task.status});
      }

      return task;
    });

    setToDoList(task);
    setEditingTask(null);

    task.map(item => {
      if(item.status === true) {
        doneTasks.push(item);
      };
    });
  };

  return (
    <div className="container">
      <h2 className="total-title">My tasks</h2>

      {editingTask && editingTask ? (
        <EditTaskList
          editingTask = {editingTask}
          changeTask = {changeTask}
          editTask = {editTask}
          cancelEditing = {cancelEditing}
        />
      ) : (
        <AddTaskList 
          task = {task}
          setTask = {setTask}
          addTask = {addTask}
        />
      )}
      
      {toDoList && toDoList.length ? 
        <div className="counter">
          {toDoList.length} tasks
          
        </div> : 
        <div className="counter">No Tasks</div>}
      
        <ToDoList
          toDoList = {toDoList}
          markDone = {markDone} 
          setEditingTask = {setEditingTask}
          deleteTask = {deleteTask}
        />
    </div>
  );
};

export default App;
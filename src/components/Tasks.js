import Task from "./Task";

function Tasks({ tasks, onDelete, onToggle }) {
  const showTasks = () => tasks.map(task => <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />);

  return <>{showTasks()}</>;
}
export default Tasks;

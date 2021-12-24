import { FaTimes } from "react-icons/fa";

function Task({ task, onDelete, onToggle }) {
  return (
    <div className={`bg-[#f4f4f4] m-1 px-5 py-2 cursor-pointer select-none ${task.reminder && "border-4 border-solid border-l-green-700"}`} onDoubleClick={() => onToggle(task.id)}>
      <h1 className="flex justify-between items-center">
        {task.text} <FaTimes className="text-red-600 cursor-pointer" onClick={() => onDelete(task.id)} />
      </h1>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;

import { useState } from "react";

function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = e => {
    e.preventDefault();

    if (!text) {
      alert("please add task");
      return;
    } else if (!day) {
      alert("please add day");
      return;
    }

    onAdd({
      text,
      day,
      reminder,
    });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="mb-10" onSubmit={onSubmit}>
      <div className="my-5 mx-0 ">
        <label className="block"> Task</label>
        <input type="text" placeholder="Add task" className="w-full h-10 m-1 px-2 py-3 text-base border-2 border-solid rounded border-gray-500" value={text} onChange={e => setText(e.target.value)} />
      </div>
      <div className="my-5 mx-0 ">
        <label className="block">Day and Time</label>
        <input type="text" placeholder="Day and Time" className="w-full h-10 m-1 px-2 py-3 text-base border-2 border-solid rounded border-gray-500" value={day} onChange={e => setDay(e.target.value)} />
      </div>
      <div className="my-5 mx-0 flex justify-between items-center ">
        <label className="block flex-1">Reminder</label>
        <input type="checkbox" className="w-full m-1 px-1 py-2 text-base flex-2 h-5" value={reminder} onChange={e => setReminder(e.currentTarget.checked)} checked={reminder} />
      </div>
      <input type="submit" value="save task" className="inline-block bg-black text-white border-none px-5 py-3 m-1 w-full rounded-md cursor-pointer text-sm focus:outline-none active:scale-[0.98] " />
    </form>
  );
}

export default AddTask;

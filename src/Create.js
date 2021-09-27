import { useState } from "react";

export default function CreateTask({ tasks, setTasks }) {
  const [task, setTask] = useState("");
  return (
    <div className="input-group input-group-sm m-3">
      <input
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        type="text"
      />
      <div class="input-group-append">
        <button
          className="btn btn-primary btn-sm active"
          onClick={() => {
            if (task !== "") {
              const t = { ...tasks };
              t.new.push({ label: task });
              setTasks(t);
              setTask("");
            }
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

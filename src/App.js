import "./styles.css";
import CreateTask from "./Create";
import { Tasks } from "./Tasks";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [tasks, setTasks] = useState({
    new: [{ label: "abc" }],
    active: [{ label: "def" }],
    completed: [{ label: "completed1" }, { label: "completed2" }]
  });
  return (
    <div className="App">
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <div style={{ display: "flex" }}>
        <Tasks tasks={tasks} status="NEW" setTasks={setTasks} />
        <Tasks tasks={tasks} status="ACTIVE" setTasks={setTasks} />
        <Tasks tasks={tasks} status="COMPLETED" setTasks={setTasks} />
      </div>
    </div>
  );
}

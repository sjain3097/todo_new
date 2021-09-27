import { useState } from "react";

export const Tasks = ({ tasks, status, setTasks }) => {
  const headerTitle =
    status === "NEW" ? "NEW" : status === "ACTIVE" ? "ACTIVE" : "COMPLETED";
  return (
    <div
      className={status.toLowerCase() + "Container"}
      style={style.taskContainer}
      onDrop={(e) => {
        let dropLocation = e.target
          .getAttribute("class")
          .replace("Container", "");
        let draggedTask = JSON.parse(e.dataTransfer.getData("draggedTask"));
        console.log(draggedTask.status, dropLocation);
        if (dropLocation !== draggedTask.status) {
          let t = { ...tasks };
          t[dropLocation].push({ label: draggedTask.label });
          t[draggedTask.status] = t[draggedTask.status].filter(
            (task) => task.label !== draggedTask.label
          );
          console.log(t);
          setTasks(t);
        }
      }}
      onDragOver={(e) => {
        e.preventDefault();
        console.log(e.currentTarget);
      }}
    >
      <div className="list-group">
        <div style={style.header}>{headerTitle}</div>
        {tasks[status.toLowerCase()].map((task) => (
          <div className="list-group-item-success m-1 border border-success">
            <div
              className={status.toLowerCase()}
              draggable
              onDragStart={(e) => {
                let label = e.target.innerHTML;
                let status = e.target.getAttribute("class");
                e.dataTransfer.setData(
                  "draggedTask",
                  JSON.stringify({ label, status })
                );
              }}
            >
              {task.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const style = {
  taskContainer: {
    width: "33.32%",
    border: "1px solid ",
    marginRight: "0.1%"
  },
  header: {
    border: "1px solid ",
    backgroundColor: "#212529",
    color: "white"
  }
};

import React, { useState } from "react";
import Task, { TaskType } from "./Task";

function TaskList() {
  const [list, setList] = useState<TaskType[]>([]);
  const [val, setVal] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setList((list) => {
            return [
              ...list,
              {
                isDone: false,
                text: val,
                id: Date.now().toString(),
              },
            ];
          });
          setVal("");
        }}
      >
        <input
          className="form-input"
          placeholder="Введите текст"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        ></input>
        <button className="btn" type="submit">
          Добавить
        </button>
      </form>
      <ul>
        {list.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => {
              setList((list) => list.filter((t) => t !== task));
            }}
            onChecked={(checked) => {
              setList((list) => {
                task.isDone = checked;
                return [...list];
              });
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

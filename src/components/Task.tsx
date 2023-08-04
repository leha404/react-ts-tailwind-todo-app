import React from "react";

export type TaskType = {
  id: string;
  text: string;
  isDone: boolean;
};

type TaskProps = {
  task: TaskType;
  onDelete: () => void;
  onChecked: (checked: boolean) => void;
};

function Task({ task, onDelete, onChecked }: TaskProps) {
  return (
    <li className="flex space-x-1 pt-5">
      <input
        className="form-input"
        type="checkbox"
        checked={task.isDone}
        onChange={(e) => onChecked(e.target.checked)}
      />
      <div className={task.isDone ? "bg-green-400" : undefined}>
        {task.text}
      </div>
      <button onClick={onDelete}>Удалить</button>
    </li>
  );
}

export default Task;

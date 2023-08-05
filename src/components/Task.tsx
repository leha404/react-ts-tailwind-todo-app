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
    <div className="grid-itm">
      <div className="flex flex-col h-full">
        <div className="h-3/4 w-full">
          <div className={task.isDone ? "line-through" : undefined}>
            {task.text}
          </div>
        </div>
        <div className="h-1/4 w-full flex justify-between">
          <button
            className={
              task.isDone
                ? "btn w-1/2 m-1 bg-blue-500 hover:bg-blue-400"
                : "btn w-1/2 m-1 bg-green-500 hover:bg-green-400"
            }
            onClick={() => {
              task.isDone ? onChecked(false) : onChecked(true);
            }}
          >
            {task.isDone ? "Отмена" : "ОК"}
          </button>
          <button
            className="btn w-1/2 m-1 bg-red-500 hover:bg-red-400"
            onClick={onDelete}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;

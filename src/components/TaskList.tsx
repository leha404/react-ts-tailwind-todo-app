import React, { useState, useMemo } from "react";
import Task, { TaskType } from "./Task";

function TaskList() {
  const [list, setList] = useState<TaskType[]>([]);
  const [val, setVal] = useState("");
  const [listFilter, setListFilter] = useState("all");

  const filteredList = useMemo(() => {
    switch (listFilter) {
      case "all":
        return list;
      case "ok":
        return list.filter((task) => task.isDone);
      case "neok":
        return list.filter((task) => !task.isDone);
      default:
        return [];
    }
  }, [listFilter, list]);

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
        <div className="bg-gray-100 p-3 rounded-t-lg flex justify-between">
          <select
            id="taskFilter"
            name="taskFilter"
            className="w-1/4 h-full rounded-xl border-1 bg-gray-10 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            value={listFilter}
            onChange={(e) => {
              setListFilter(e.target.value);
            }}
          >
            <option value="all">Все</option>
            <option value="ok">Выполненные</option>
            <option value="neok">Невыполненные</option>
          </select>
          <input
            className="w-2/4 ml-5 rounded-lg"
            placeholder="Введите задачу"
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
            }}
          ></input>
          <button className="btn ml-5 w-1/8" type="submit">
            Добавить
          </button>
          <button
            type="button"
            className="btn ml-5 w-1/8 bg-red-500 hover:bg-red-400"
            onClick={() => setList([])}
          >
            Очистить
          </button>
        </div>
      </form>

      <div className="grid bg-gray-100">
        {filteredList.map((task) => (
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
      </div>
    </div>
  );
}

export default TaskList;

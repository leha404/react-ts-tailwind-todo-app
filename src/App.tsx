import React from "react";
import MockTaskList from "./components/MockTaskList";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl m-5 font-bold">План по ReadMe:</h1>
      <MockTaskList />

      <h1 className="text-2xl mb-5 mt-10 pt-5">Тудушка:</h1>
      <TaskList />
    </div>
  );
}

export default App;

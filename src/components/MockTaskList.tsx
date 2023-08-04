import MockTask from "./MockTask";
import mockTasksData from "../mockTasksData";

function MockTaskList() {
  return <ol>
    {mockTasksData.map(task => 
      <li key={task.text}>
        <MockTask checked={task.checked} text={task.text}/>
      </li>
    )}
  </ol>;
}

export default MockTaskList

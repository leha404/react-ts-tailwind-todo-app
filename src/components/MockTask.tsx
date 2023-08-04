import { MockTaskType } from "../mockTasksData"; 

function MockTask(props: MockTaskType) {
    const textStyle = {
      color: "black"
    }
  
    if (props.checked) {
      textStyle.color = "green"
    }
  
    return (
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" disabled checked={props.checked}></input>
        <label style={textStyle}> {props.text}</label>
      </div>
    );
  }
  
  export default MockTask
  
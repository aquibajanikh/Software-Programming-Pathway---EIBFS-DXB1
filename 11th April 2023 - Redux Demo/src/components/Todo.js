import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../redux/reducers/todoReducer";

function Todo() {
  const todoList = useSelector((state) => state.todo.todoList);
  const [taskValue, setTaskValue] = useState("");

  const dispatch = useDispatch();
  return (
    <>
      <h1>Todo</h1>
      <input
        type="text"
        onChange={(e) => setTaskValue(e.target.value)}
        value={taskValue}
      />
      <button
        onClick={() => {
          dispatch(addToDo({ value: taskValue }));
          setTaskValue("");
        }}
      >
        Add task
      </button>
      <div>
        <ul>
          {todoList.map((item) => (
            <li>{item.value}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;

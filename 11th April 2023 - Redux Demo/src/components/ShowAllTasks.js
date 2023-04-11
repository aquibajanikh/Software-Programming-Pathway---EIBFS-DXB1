import { useSelector } from "react-redux";

function ShowAllTasks() {
  const todoList = useSelector((state) => state.todo.todoList);
  return (
    <>
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

export default ShowAllTasks;

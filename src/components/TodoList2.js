import TodoItem2 from "./TodoItem2";
import data2 from "../data2";

const TodoList2 = () => {
  return (
    <div>
      <h5>react map lev1_2</h5>

      <div className="todo_container">
        <h1>To Do List</h1>
        <div className="list_container">
          <ul>
            {data2.map((el, i) => (
              <TodoItem2 key={i} task={el.task} completed={el.completed} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList2;

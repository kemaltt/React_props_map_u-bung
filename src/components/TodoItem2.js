const TodoItem2 = ({ task, key, completed }) => {
  return (
    <li>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={completed}
      />
      <label htmlFor="checkbox">{task}</label>
    </li>
  );
};

export default TodoItem2;

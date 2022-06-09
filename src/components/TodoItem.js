const TodoItem = (props) => {
  // console.log(props);
  return (
    <ul>
      <li> {props.text} </li> <img src={props.img1} alt="img1" />
      <img src={props.img2} alt="img2" />
    </ul>
  );
};

export default TodoItem;
